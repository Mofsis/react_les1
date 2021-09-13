import React from 'react';
import './App.css';
import Button from "./components/Button";
import Bag from "./components/Bag";
import Tile from "./components/Tile";
import bagone from "./assets/bag_1.png";
import bagtwo from "./assets/bag_2.png";
import bagtree from "./assets/bag_3.png";
import bagfour from "./assets/bag_4.png";
import brandimg from "./assets/brand.png";
import osimg from "./assets/our_story.png";

function App() {
  return (
     <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button name="to the collection" click="to the collection" />
        <Button name="shop all bags" click="shop all bags" />
        <Button name="pre-order" click="pre-order" disabled={true}/>
      </nav>
      <main>
          <Bag info="Best seller" imgname={bagone} bagname="The handy bag" price="€400,-"/>
          <Bag info="Best seller" imgname={bagtwo} bagname="The stylish bag" price="€250,-"/>
          <Bag info="New collection" imgname={bagtree} bagname="The simple bag" price="€300,-"/>
          <Bag info="New collection" imgname={bagfour} bagname="The trendy bag" price="€150,-"/>
      </main>
      <footer>
        <Tile title="THE BRAND" > <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias commodi cum ea fuga modi nam necessitatibus nesciunt sapiente, voluptatem!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias commodi cum ea fuga modi nam necessitatibus nesciunt sapiente, voluptatem!</p>
        </Tile>
        <Tile img={brandimg} alt="image"/>
        <Tile img={osimg} alt="image"/>
        <Tile title="OUR STORY" > <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias commodi cum ea fuga modi nam necessitatibus nesciunt sapiente, voluptatem!</p>
        </Tile>
      </footer>
     </>
  );
}

export default App;



