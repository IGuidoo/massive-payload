export const getCategorieSlugById = async (id: string) => {  
    const response = await fetch(`http://localhost:4000/api/categories/${id}`);
    const category = await response.json();

    return category.slug;
}

export const getTagSlugById = async (id: string) => {  
    const response = await fetch(`http://localhost:4000/api/tags/${id}`);
    const tag = await response.json();

    return tag.slug;
}