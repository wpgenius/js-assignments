import Card from "./Card";
import "./CardList.css"

function CardList({ posts }) {
  return (
    <div className='posts_list'>
      {posts.map((item, idx) => {
        return (
          <Card
            idx={idx}
            img={item.yoast_head_json.twitter_image}
            date={item.date}
            name={item.title.rendered}
            desc={item.excerpt.rendered}
            link={item.link}
          />
        );
      })}
    </div>
  )
}

export default CardList;
