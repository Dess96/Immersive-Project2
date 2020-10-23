import React from "react";
import "./home.css";
import Description from '../description/description';

const title1 = 'About the page';
const description1 = 'This site uses the TasteDive API to retrieve bands, movies, shows, and games related to your interests. These interests can be saved in different collections so that you can look them up later. Also, you can find out how many interests you share with your friends.';
const title2 = 'How to use';
const description2 = 'First search for a band, show, movie or game that you like. Once you hit the search button you will receive suggestions for similar items. If you wish to add these items to your collection, hit the "save" icon. When the item is in your collection the "save" icon will appear filled. If you wish to delete an item, you can click it again from the search page or you can delete from the collection page. In the collection page you will see some of the items and when you click "more" you will have access to an additional description. In the "friends" tab you can see how many items you have in common in your collections with your pals.';

const Home = () => {
  return (
    <div className="contentHome">
        <Description title={title1} description={description1}/>
        <Description title={title2} description={description2}/>
    </div>
  );
};

export default Home;
