import { Helmet } from 'react-helmet-async'

interface HeadProps {
    title?: string,
    description?: string,
    image?: string,
    url?: string
}

interface Metadatas {
    site_name: string,
    title: string,
    description: string,
    image: string | undefined,
    url: string | undefined
}

const Head = ({ title, description, image, url }: HeadProps) => {
    const pathname: string = typeof window !== 'undefined' ? window.location.pathname : ''

    const metadatas: Metadatas = {
        site_name: 'React-Typescript-Boilerplate',
        title: 'React-Typescript-Boilerplate' || title,
        description: 'A boilerplate for starting every React-Typescript App.' || description,
        image: `${process.env.REACT_APP_URL}/img/logo.png` || image,
        url: `${process.env.REACT_APP_URL}${pathname}` || url
    }

    return (
        <Helmet title={metadatas.title} defaultTitle={metadatas.title} titleTemplate={`%s | ${metadatas.site_name}`}>
            <link rel="icon" href="/img/favicon.ico" />
            <meta name="description" content={metadatas.description} />
            <meta name="image" content={metadatas.image} />

            <meta property="og:site_name" content={metadatas.site_name} />
            <meta property="og:title" content={metadatas.title} />
            <meta property="og:description" content={metadatas.description} />
            <meta property="og:image" content={metadatas.image} />
            <meta property="og:url" content={metadatas.url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metadatas.title} />
            <meta name="twitter:description" content={metadatas.description} />
            <meta name="twitter:image" content={metadatas.image} />
            <meta name="twitter:site" content={metadatas.site_name} />
        </Helmet>
    )
}

export default Head;