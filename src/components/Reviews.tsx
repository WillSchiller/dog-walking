"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'



const renderStarRating = (rating: number) => {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < rating ? '★' : '☆';
  }
  return stars;
};


type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
  relative_time_description: string;

};

type GoogleReviewsResponse = {
  result: {
    reviews: GoogleReview[];
  };
};

type GoogleReviewProps = {
  placeId: string;
  apiKey: string;
};

const Reviews: React.FC<GoogleReviewProps> = ({ placeId, apiKey }) => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = {
          "html_attributions" : [],
          "result" : 
          {
             "reviews" : 
             [
                {
                   "author_name" : "Ellie The Goldendoodle",
                   "author_url" : "https://www.google.com/maps/contrib/101273378818365831167/reviews",
                   "language" : "en",
                   "original_language" : "en",
                   "profile_photo_url" : "https://lh3.googleusercontent.com/a-/ALV-UjVSEHjmbqDgiyzyMmdX0-v4U8a94c_E90PnADvTpxdtgLU=s128-c0x00000000-cc-rp-mo-ba5",
                   "rating" : 5,
                   "relative_time_description" : "7 months ago",
                   "text" : "This is a very large store, with home related items, and clothing too. I really like this store as it has the self scan handheld 'beepers' (at least that's what we call them!) I find it a much nicer shopping experience being able to pack my bags as I go and then just scan the beeper at the end and pay. No unloading and reloading of the trolley!\nClothing wise, there is a lot more clothing for ladies than for men. There is quite a bit of children's clothing too. I find it all to be good quality especially for the prices which are very reasonable. My partner and her girls (10 and 12) all have got clothing from here and really like what they've got.\nAs you walk in, on the left is a staircase that takes you to the cafe (I've eaten there before and it I'd very nice food for good prices, apologies I didn't get any photos).\nThere is also a counter on the left as you walk in the front door which serves sandwiches and lunch items, a lottery machine and scratch cards, and cigarettes.\nThere is a huge selection of food and drinks, all sorts of different brands and types of food. So plenty of choice.\nThey have introduced the nectar prices on some items so it's worth having a nectar card when shopping here to get the savings. Another good reason to use the beeper as the nectar card is assigned to it so you automatically get the savings. They have also been doing a lot of Aldi price matching and so I'm finding there isn't too much difference between shopping here and Aldi, and the convenience of the beeper, plus the vast choice means I'm shopping here more now.\nIf you don't like doing the beeper, they have some belt tills and also quite a number of self checkout tills.\nThere is an argos in the store at the far right as you walk into the store.\nThere is a huge amount of parking at the front of the store, and a petrol station as you drive in.\nRecommend shopping here!",
                   "time" : 1686647369,
                   "translated" : false
                },
                {
                   "author_name" : "Jenna Crump",
                   "author_url" : "https://www.google.com/maps/contrib/115234912445533516081/reviews",
                   "language" : "en",
                   "original_language" : "en",
                   "profile_photo_url" : "https://lh3.googleusercontent.com/a-/ALV-UjWEZo0nhv5YS-YPiof1tCmTic5GaUGZuKE0yg0GFrtHlEqi=s128-c0x00000000-cc-rp-mo-ba4",
                   "rating" : 4,
                   "relative_time_description" : "2 months ago",
                   "text" : "Well presented store, clean, tidy and well stocked. However, for a large store, I didn't find the greater variety I was expecting. Yes, there was a bigger home department, but overall it stocked pretty much what my local standard store stocks, I wouldn't recommend making a special trip if your expecting a greater product range. Otherwise good experience",
                   "time" : 1700390120,
                   "translated" : false
                },
                {
                   "author_name" : "John Dean",
                   "author_url" : "https://www.google.com/maps/contrib/112352856095159385511/reviews",
                   "language" : "en",
                   "original_language" : "en",
                   "profile_photo_url" : "https://lh3.googleusercontent.com/a-/ALV-UjXtoBbUaHDbqJE0CgUzz4w9U_iGRkizaHr0N0XnZOhcb2A=s128-c0x00000000-cc-rp-mo-ba4",
                   "rating" : 5,
                   "relative_time_description" : "a month ago",
                   "text" : "This is a big shout out for Julie at Sainsbury's Petrol Station. Nothing was too much trouble. The receipt from the pump printed a blank. She showed me how to get a duplicate receipt from any pump. This however, didn't print correctly either.\nSorted it at the cashier's desk.\nTHANK YOU, excellent customer service.\nRetail needs more of you.",
                   "time" : 1702989419,
                   "translated" : false
                },
                {
                   "author_name" : "Valeska Buszka",
                   "author_url" : "https://www.google.com/maps/contrib/104252667382576713665/reviews",
                   "language" : "en",
                   "original_language" : "en",
                   "profile_photo_url" : "https://lh3.googleusercontent.com/a-/ALV-UjW4S8S6xE_1yE0hdB5rFcMg4rHESLsfKwrC40j2EltPx1o=s128-c0x00000000-cc-rp-mo",
                   "rating" : 5,
                   "relative_time_description" : "a week ago",
                   "text" : "Great experience. Wide aisles, clean, well lit & great variety of goods. Would recommend 👍",
                   "time" : 1705418049,
                   "translated" : false
                },
                {
                   "author_name" : "Al Jones",
                   "author_url" : "https://www.google.com/maps/contrib/102764764677634531617/reviews",
                   "language" : "en",
                   "original_language" : "en",
                   "profile_photo_url" : "https://lh3.googleusercontent.com/a/ACg8ocJKvvTyFXU88LjVat6Zx3ihIbTg1NDnWMfJRQmBwMQg=s128-c0x00000000-cc-rp-mo-ba6",
                   "rating" : 5,
                   "relative_time_description" : "a month ago",
                   "text" : "Visited with my daughter after a visit to the nearby Reaseheath College open day. We decoded to eat before we shopped. The Christmas themed menu has some nice choices and the food and drinks were delicious. The staff were charming and the tables kept clean at all times.\n\nIn the store, the experience was reapeated with some Christmas present shopping. The store is spacious and stocks a great range of product choices. This was perhaps our best supermarket experience to date!!",
                   "time" : 1702409284,
                   "translated" : false
                }
             ]
          },
          "status" : "OK"
       }
        setReviews(response.result.reviews);
      } catch (err) {
        setError('Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, apiKey]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return ( 
    <div className='bg-white py-10 text-center'>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Reviews
            </h1>
   
    <div className="overflow-hidden bg-white sm:py-10 text-slate-800 ">
       
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
    <div>
    {reviews.map((review, index) => (
      <div className='rounded-xl' key={index} style={{ border: '1px solid #ddd', padding: '15px', margin: '15px 0' }}>
        
      
        <Image
            src={review.profile_photo_url}
            alt="Product screenshot"
            className="rounded-full mx-auto"
            width={50}
            height={50}
          />
        <h4>{review.author_name}</h4>
       
   
        <div className='text-4xl' style={{ color: '#FFD700' }}>{renderStarRating(review.rating)}</div>
        <p>{review.text}</p>
        <p className='text-slate-500'>{review.relative_time_description}</p>
      </div>
    ))}
  </div>
  </div>
  </div>
  </div>
  );
};

export default Reviews;

