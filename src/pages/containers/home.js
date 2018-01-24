
import React, { Component } from 'react';

import HandleError from '../../error/containers/handle-error';
import HomeLayout from '../components/home-layout';

class Home extends Component {
    render(){
        return(
            <HandleError>
                <HomeLayout>
                   
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;