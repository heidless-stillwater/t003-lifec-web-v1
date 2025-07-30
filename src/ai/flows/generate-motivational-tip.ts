// src/ai/flows/generate-motivational-tip.ts
'use server';
/**
 * @fileOverview Generates a personalized motivational tip based on user preferences and needs.
 *
 * - generateMotivationalTip - A function that generates the motivational tip.
 * - MotivationalTipInput - The input type for the generateMotivationalTip function.
 * - MotivationalTipOutput - The return type for the generateMotivationalTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MotivationalTipInputSchema = z.object({
  preferences: z
    .string()
    .describe(
      'The user preferences and needs, expressed as a string.  Examples:  career growth, relationship advice, overcoming procrastination.'
    ),
});
export type MotivationalTipInput = z.infer<typeof MotivationalTipInputSchema>;

const MotivationalTipOutputSchema = z.object({
  tip: z.string().describe('The personalized motivational tip.'),
});
export type MotivationalTipOutput = z.infer<typeof MotivationalTipOutputSchema>;

export async function generateMotivationalTip(
  input: MotivationalTipInput
): Promise<MotivationalTipOutput> {
  return generateMotivationalTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'motivationalTipPrompt',
  input: {schema: MotivationalTipInputSchema},
  output: {schema: MotivationalTipOutputSchema},
  prompt: `You are an AI life coach that specializes in providing short, but impactful personalized motivational tips.

  Based on the user's preferences and needs, create a single motivational tip to help them.

  Preferences and Needs: {{{preferences}}}`,
});

const generateMotivationalTipFlow = ai.defineFlow(
  {
    name: 'generateMotivationalTipFlow',
    inputSchema: MotivationalTipInputSchema,
    outputSchema: MotivationalTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
