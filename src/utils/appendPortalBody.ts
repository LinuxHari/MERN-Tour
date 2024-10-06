const appendPortalBody = (id: string) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", id);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

export default appendPortalBody