export const load = async ({ fetch }) => {
	const query = `
    query GetAboutPage {
      pageBy(uri: "about") {
        id
        title
        aboutPageContent {
        headerimage {
        node {
          sourceUrl
          altText
          caption
          description
          title
            }
          }
          mainHeader
          leftHeading2
          leftImage {
            node {
              sourceUrl
              altText
              caption
            }
          }
          leftContent
          rightHeading2
          rightImage {
            node {
              sourceUrl
              altText
              caption
            }
          }
          rightContent
          quotes
          secondComponentHeader
          weBelieve
          beliefsContent
          beliefsImage {
            node {
              altText
              sourceUrl
              title
              caption
            }
          }
        }
      }
      boardOfDirectors {
        edges {
          node {
            bod {
              bodPhoto {
                node {
                  altText
                  caption
                  date
                  title
                  sourceUrl
                }
              }
              bodTitle
              bodHeader
              instagram
              linkedin
              bodDescription
              listOrder
            }
            content
            title
          }
        }
      }
      cccdHistories {
    nodes {
      content
      title
      id
      categories {
        nodes {
          name
        }
      }
      history {
        historyOrder
        historyImage {
          node {
            id
            altText
            caption
            sourceUrl
            title
            description
          }
        }
      }
    }
  }
    }
  `;

	try {
		const response = await fetch(import.meta.env.VITE_HUBAPI_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query }),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const { data } = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching about page data:", error);
		return {
			error: "Failed to load about page content",
		};
	}
};
