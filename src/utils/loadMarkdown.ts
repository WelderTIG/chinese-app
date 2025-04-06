export const loadMarkdownContent = async (filename: string): Promise<string> => {
    try {
        const response = await fetch(`${process.env.PUBLIC_URL || ''}/markdown/${filename}`);
        if (!response.ok) throw new Error('Failed to load markdown');
        return await response.text();
    } catch (error) {
        console.error('Error loading markdown:', error);
        return '# Ошибка загрузки\nНе удалось загрузить содержимое.';
    }
};