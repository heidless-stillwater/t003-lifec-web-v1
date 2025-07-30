"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateMotivationalTip, type MotivationalTipInput } from '@/ai/flows/generate-motivational-tip';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object({
  preferences: z.string().min(10, {
    message: "Please describe your needs in at least 10 characters.",
  }).max(200, {
    message: "Please keep your description under 200 characters.",
  }),
});

export default function AiProTips() {
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferences: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setTip(null);
    try {
      const input: MotivationalTipInput = { preferences: values.preferences };
      const result = await generateMotivationalTip(input);
      setTip(result.tip);
    } catch (error) {
      console.error("Failed to generate tip:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "We couldn't generate a tip for you. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="shadow-lg border-2 border-accent/50">
        <CardHeader className="text-center">
          <div className="mx-auto bg-accent/20 p-3 rounded-full w-fit mb-2">
            <Sparkles className="w-8 h-8 text-accent-foreground" />
          </div>
          <CardTitle className="font-headline text-3xl">
            AI-Powered Pro Tip
          </CardTitle>
          <CardDescription>
            Tell us what's on your mind, and our AI will generate a personalized motivational tip just for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="preferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you need motivation for today?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'starting a new project at work'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? 'Generating...' : 'Get My Tip'}
              </Button>
            </form>
          </Form>

          {(loading || tip) && (
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-2 text-foreground/80">Your Personalized Tip:</h3>
              {loading ? (
                 <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                 </div>
              ) : (
                <blockquote className="border-l-4 border-accent pl-4">
                    <p className="text-lg italic text-foreground/90">
                    {tip}
                    </p>
                </blockquote>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
