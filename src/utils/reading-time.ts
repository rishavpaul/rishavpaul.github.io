/**
 * Calculate reading time for content
 * Uses 200 words per minute as the average reading speed
 */
export function calculateReadingTime(content: string): number {
	const WORDS_PER_MINUTE = 200;
	// Remove markdown syntax and count words
	const textContent = content
		.replace(/```[\s\S]*?```/g, '') // Remove code blocks
		.replace(/`[^`]+`/g, '') // Remove inline code
		.replace(/[#*_[\]()]/g, '') // Remove markdown syntax
		.replace(/\s+/g, ' ') // Normalize whitespace
		.trim();

	const wordCount = textContent.split(/\s+/).length;
	const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

	return minutes;
}
