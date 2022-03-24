import React, { useEffect, useState } from 'react'
import NewsItem from '../../components/NewsItem';
import Typography from '@mui/material/Typography';
import { getTopHeadlines } from '../../services/api';
import './HomePage.css'

function HomePage() {
    const [headlines, setHeadlines] = useState([]);

    const handleGetNews = async () => {
        try {
            let response = await getTopHeadlines();
            console.log(response)
            setHeadlines(response.data.articles)
        } catch (error) {
            console.log(error)
        }
    }
    // on component mount
    useEffect(() => {
        handleGetNews();
    }, [])

    return (
        <div className='home-conatiner'>
            <Typography variant="h4" gutterBottom component="div">
                Top Headlines
            </Typography>
            <div className='news-container'>
                {
                    headlines.map((news) => {
                        return (
                            <NewsItem
                                imageUrl={news.urlToImage}
                                title={news.title}
                                desc={news.description}
                                link={news.url}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default HomePage