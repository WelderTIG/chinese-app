export const loadMarkdownContent = async (filename: string): Promise<string> => {
    try {
        if (process.env.NODE_ENV === 'development') {
            // Для development-режима учитываем базовый URL
            const baseUrl = process.env.PUBLIC_URL || '';
            const response = await fetch(`${baseUrl}/markdown/${filename}`);
            if (!response.ok) throw new Error('Failed to load markdown');
            return await response.text();
        }

        // Production-режим остается без изменений
        switch (filename) {
            case 'grammar.md':
                return (await import('../assets/markdown/grammar.md')).default;
            case 'grammar2.md':
                return (await import('../assets/markdown/grammar2.md')).default;
            case 'modalVerbs.md':
                return (await import('../assets/markdown/modalVerbs.md')).default;
            default:
                throw new Error('Unknown markdown file');
        }
    } catch (error) {
        console.error('Error loading markdown:', error);
        return '# Ошибка загрузки\nНе удалось загрузить содержимое.';
    }
};