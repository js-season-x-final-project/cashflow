import React from 'react';
import classes from './Homepage.module.css'
import Button from '../UI/Button'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class Homepage extends React.Component {

    state={
        newPath:'/auth'
    }
    replaceHash =() =>{
        this.props.history.replace(this.state.newPath);
    }

    render(){
        return( 
        <div className={classes.Background}>
            <div className={classes.MainheadingPosition}>
                <h1 className={classes.Mainheading}>Control your money from every point </h1>
            </div>
            <div className={classes.AuthorizePlace}>
                <h3>Get your cashflow controlled</h3>
                <p>
                    When you’re on top of your money, life is good. <br/>
                    We help you effortlessly manage your finances in one place.
                </p>
                <Button buttonText="Authorize yourself" onClick={this.replaceHash}/>
            </div>
        </div>
       )
    }
}

export default Homepage;