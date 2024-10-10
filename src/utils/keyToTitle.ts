const keyToTitle = (key: string) => {
    const spacedKey = key.replace(/([A-Z])/g, ' $1');
    const cleanedKey = spacedKey.replace(/_/g, ' ').toLowerCase();
    return cleanedKey.charAt(0).toUpperCase() + cleanedKey.slice(1);
}

export default keyToTitle