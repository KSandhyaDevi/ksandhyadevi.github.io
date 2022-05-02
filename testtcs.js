function getSectionDataByCategory(callback) {
    setTimeout(function() {
        var sectionData = [{
                sectionId: 1,
                sectionName: "Fashion",
                sectionUrl: "www.google.com",
                heroImage: "heroimage1.PNG"
            },
            {
                sectionId: 2,
                sectionName: "Travel",
                sectionUrl: "www.google.com",
                heroImage: "heroimage2.PNG"
            },
            {
                sectionId: 3,
                sectionName: "Beauty",
                sectionUrl: "www.google.com",
                heroImage: "heroimage3.PNG"
            }
        ];
        callback(sectionData)
    }, 1000);
};
function getAddcontent(){
	return `<div class="addcontentDiv"><a target="_blank"  href="www.google.com"><img src="addimage1.PNG" alt="Advertisement" border="0" width="300" height="250" style="display:block"></a></div>
			
			<div class="addcontentDiv"  ><a target="_blank"  href="www.google.com"><img src="addimage2.PNG" alt="Advertisement" border="0" width="300" height="250" style="display:block"></a></div>
			`;
}
function getSectionContent(sectionData) {
    if (sectionData.length > 0) {
        var content = ``;
        for (let i = 0; i < sectionData.length; i++) {
            content += getsectionDivContent(sectionData[i]);
        }
		//content += `<div id="addContent" class="section"></div>`;
       document.getElementById("mainSection").innerHTML = content;
		setTimeout(function(){
			loadEachSectionArticleList();
		}, 100);
		
    } else {

        document.getElementById("content").innerHTML = `<div class="errorMessage"><div> Error while loading page Please try again</div><div>`;
    }
}

function getsectionDivContent(obj) {
    return `<div id="section_${obj.sectionId}" class="section" >
<header id="sectionId" class="sectionId " >${obj.sectionName}</header>
<div id="heroImage" class="borderbottom">
<img src="${obj.heroImage}" id="heroImage"  alt="todo" >
</div>
<div id="articlesList_${obj.sectionId}">
<div id="loadingText">Loading articles... 
<span class="articleIdForSection">${obj.sectionId}</span>
</div>
</div>
</div>`;
}


function loadEachSectionArticleList() {
    var articleListIdForAllSec = document.getElementsByClassName("articleIdForSection");
    var doAppendArticle = function(sectionDiv, articleContent) {
        sectionDiv.innerHTML = articleContent;

    }
    if (articleListIdForAllSec.length > 0) {
        for (let z = 0; z <= 10; z++) {
            if (articleListIdForAllSec[z] != null) {
                let sectionId = parseInt(articleListIdForAllSec[z].innerHTML);
                let sectionDiv = document.getElementById("articlesList_" + sectionId);
                let articleContent = `<table class="width100" id="sectionarticles_${sectionId}" > <tbody>`;
                let articleListDataforSec = getArticleListForSectionId(sectionId);

                for (let j = 0; j < articleListDataforSec.articleList.length; j++) {
                    articleContent += `<tr><td id="articleID" class="borderbottom"><span style="font-size: 15px;">${articleListDataforSec.articleList[j].articleTitle}</span></td></tr>`;
                }

                articleContent += `</tbody></table>`;
                setTimeout(function() {
                    doAppendArticle(sectionDiv, articleContent)
                }, 100);
            }
        }

    }
}

const promise = new Promise((resolve, reject) => {
    resolve('We are done.');
});

function getArticleListForSectionId(sectionId) {
    switch (sectionId) {
        case 1:
            return {
                sectionId: 1, articleList: [{
                        articleId: 11,
                        articleTitle: "KGF-2 actress SrinidhiShetty stuns in a mint green anarkali",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 12,
                        articleTitle: "Story behind Alia's upcycled lehenga worn for her Mehendi",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 13,
                        articleTitle: "Kiss and te;;-Watch Full..",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 14,
                        articleTitle: "Eid outfit inspo from Bollywood lftar bash",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 15,
                        articleTitle: "Hidden article 15",
                        adInfo: {
                            Adpartner: "test"
                        }
                    }
                ]
            };;

        case 2:
            return {
                sectionId: 2, articleList: [{
                        articleId: 21,
                        articleTitle: "The quirkiest things to do in Spiti this summer",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 22,
                        articleTitle: "A look at India's top 5 most-visited heritage sites",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 23,
                        articleTitle: "A begginner's 5-day itinerary to Bail",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 24,
                        articleTitle: "How to travel in a train in India with your pet?",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 25,
                        articleTitle: "Hidden article 25",
                        adInfo: {
                            Adpartner: "test"
                        }
                    }
                ]
            };

        case 3:
            return {
                sectionId: 3, articleList: [{
                        articleId: 31,
                        articleTitle: "Korean lip balm recipe for pink lips",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 32,
                        articleTitle: "Best hair experiments of BTS' jungkook",
                        adInfo: {
                            Adpartner: "test"
                        }
                    },
                    {
                        articleId: 33,
                        articleTitle: "Unsold cars in Kochi for sale: Check it..",
                        adInfo: {
                            Adpartner: "test"
                        }
                    }
                ]
            };

        default:
            return null;
    }
};

getSectionDataByCategory(getSectionContent);
