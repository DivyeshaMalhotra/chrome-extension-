import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class App extends React.Component{
  constructor(props){
    super(props);
    this.showCharities = this.showCharities.bind(this)
    
    this.state = {
      charities: []
    };
  }
  
  componentDidMount(){
    var message = 'Coronavirus ravaging the nation';
    //var message = document.getElementsByClassName('balancedHeadline')[0].innerHTML;
    var page_url = window.location.href;
    console.log("Fuck you");
    console.log("Here");
    console.log(page_url);
    var url = 'http://127.0.0.1:5000/get_corona_charities';
    var data = {"article_name": message, "article_url":page_url};
    
    $.post(url, data, function(output) {
      console.log('Inside post');
      console.log(output);
      this.setState({
        charities: output
      });
    }.bind(this));
  }
  
  showCharities(charity_dic){
    const classes = makeStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140
      },
    });
    const styles = {
      root: {maxHeight: 800},
      media: {
        height: 30,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
      }
    };
    
    return (
      <div id="e199574_265">
        <div id="e199574_266">
          <img id="image_thing" src={charity_dic.picture_link}></img>
        </div>
        <span id="e199574_267">{charity_dic.project_name}</span>
        <div id="e199574_268"></div>
        <div id="e199574_269"></div>
        <span id="e199574_270"><a href={charity_dic.donate_link}>DONATE</a></span>
        <span id="e199574_274">{charity_dic.raised} raised of {charity_dic.goal}</span>
        <span id="e199574_275">{charity_dic.description.substring(0,150).concat('...')}</span>
        <span id="e199574_276">{charity_dic.country}</span>
        <span id="e199574_279">_________________________________</span>
      </div>
    );	
  }
  
  
  
  render () {
    const items = [];
    const charities = this.state.charities.map((charity, i) => {
      items.push(this.showCharities(charity));
    });  
    
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
        
    return (
      <div className="App">
        <div id="e199574_108">
          <Carousel responsive={responsive}
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}>
            {items}
          </Carousel>
          <span id="e199574_147">Powered by</span>
          <span id="e199574_148">newspark.</span>
       </div>
      </div>
    );
  }
}
const app = document.createElement('div');
app.id = "my-extension-root";
//var paragraph = document.querySelector('.css-15hwz5e.evys1bk0');
//var paragraph = document.getElementsByClassName('balancedHeadline')[0];
//var paragraph = document.getElementsByTagName('p')[3];
var paragraph = document.querySelector('[itemprop=headline]').parentElement
console.log(paragraph);
// console.log("Just checking");
paragraph.after(app);
// document.addChild(app);
ReactDOM.render(<App />, app);
console.log("Rendered");
export default App;
