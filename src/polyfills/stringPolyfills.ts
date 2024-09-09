if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (search, replacement) {
    if (typeof search === "string") {
      const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      search = new RegExp(escapedSearch, "g");
    }

    return this.replace(search, replacement);
  };
}