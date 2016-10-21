# Klassen-Referenz

Methode | Erläuterung
-----|-----
[__construct($_clang = false, $_loadSettings = true, $_useStopwords = true)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L72) | Class constructor
[doSearchArticles($_bool = false)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L238) | Selects if articles will be searched
[doGroupBy($_bool = true)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L243) | Use GROUP BY to group results
[setSearchInIDs($_searchInIDs, $_reset = false)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L251) | Creates an array of ids which will be searched
[setMaxTeaserChars($_count)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L348) | Sets the maximum count of letters the teaser of a searched through text may have.
[setMaxHighlightedTextChars($_count)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L358) | Sets the maximum count of letters around an found search term in the highlighted text.
[generateIndex()](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L366) | Generates the full index at once.
[indexArticle($_id,$_clang = false)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L422) | Indexes a certain article.
[indexColumn($_table, $_column, $_idcol = false, $_id = false, $_start = false, $_count = false, $_where = false)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L569) | Indexes a certain column. Returns the number of the indexed rows or false.
[indexFile($_filename, $_doPlaintext = false, $_clang = false, $_fid = false, $_catid = false)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L734) | Indexes a certain file. Returns SEARCH_IT_FILE_GENERATED or an error code.
[getMinFID()](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L914) | In some cases there is no id for the field fid in the index table (like media files). Therefore Search it counts into the negative. 
[excludeArticle($_id,$_clang = false)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L929) | Excludes an article from the index.
[deleteIndex()](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L960) | Deletes the complete search index.
[setSurroundTags($_tags, $_endtag = false)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L975) | Sets the surround-tags for found keywords. Expects either the start- and the end-tag or an array with both tags.
[setLimit($_limit, $_countLimit = false)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L997) | Sets the maximum count of results. Expects either the start- and the count-limit or an array with both limits or only the count-limit.
[setBlacklist($_words)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1014) | Sets words, which must not be found. Expects an array with the words as parameters.
[setExcludeIDs($_ids)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1027) | Exclude Articles with the transfered IDs. Expects an array with the IDs as parameters.
[searchInArticles($_ids)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1041) | Sets the IDs of the articles which are only to be searched through. Expects an array with the IDs as parameters.
[searchInCategories($_ids)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1051) | Sets the IDs of the categories which are only to be searched through. Expects an array with the IDs as parameters.
[searchInFileCategories($_ids)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1061) | Sets the IDs of the mediapool-categories which are only to be searched through. Expects an array with the IDs as parameters.
[searchInDbColumn($_table, $_column)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1072) | Sets the columns which only should be searched through.
[setIncludeColumns($_columns = array())](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1082) | Sets the columns which should be indexed.
[setWhere($_where)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1091) | Set additional WHERE Clause
[setLogicalMode($_logicalMode)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1107) | Sets the mode of how the keywords are logical connected.
[setTextMode($_textMode)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1143) | Sets the mode concerning which text is to be searched through.
[setSearchMode($_searchMode)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1184) | Sets the MySQL search mode.
[setOrder($_order)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1211) | Sets the sort order of the results.
[setHighlightType($_type)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1246) | Sets the type of the text with the highlighted keywords.
[parseSearchString($_searchString)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1276) | Converts the search string to an array.
[addWhitelist($_whitelist)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1334) | This method adds weight to special words.
[setCaseInsensitive($_ci = true)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1350) | Case sensitive or case insensitive?
[setClang($_clang)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1374) | Sets the language-Id.
[getPlaintext($_text)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1392) | Strips the HTML-Tags from a text and replaces them with spaces or line breaks
[getHighlightedText($_text)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1419) | According to the highlight-type this method will return a string or an array. Found keywords will be highlighted with the surround-tags.
[getTeaserText($_text)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1577) | Gets the teaser of a text.
[isCached($_search)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1609) | Returns if a search term is already cached. The cached result will be stored in $this->cachedArray.
[cacheSearch($_result, $_indexIds)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1644) | Stores a search result in the cache.
[deleteCache($_indexIds = false)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1691) | Truncates the cache or deletes all data that are concerned with the given index-ids.
[storeKeywords($_keywords, $_doCount = true)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1737) | Store Keywords
[deleteKeywords()](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1772) | Delete Keywords
[search($_search)](https://github.com/pixelfirma/search_it/blob/Doku/lib/search_it.php#L1785) | Executes the search.