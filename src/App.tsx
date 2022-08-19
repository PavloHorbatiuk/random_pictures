import React from 'react';
import FormPicture from "./components/FormPicture";
import {usePictureDetails} from "./hooks/usePictureDetails";
import './variables.scss'
import "./App.scss"


function App() {
    const {getRandomNum, isShow, isLoading} = usePictureDetails()
    const takeNum = () => getRandomNum()
    const loremPicture = "https://picsum.photos/200"
    const timeIsLoading = <span>Is loading...</span>
    return (
        <div className='wrapper'>
            <h1>Game with random numbers</h1>
            <div className='content'>

                {isShow &&
                    <div className='images'>
                        <FormPicture webAddress={loremPicture} title={"picture - 1"}/>
                        <FormPicture webAddress={loremPicture} title={"picture - 2"}/>
                        <FormPicture webAddress={loremPicture} title={"picture - 3"}/>
                    </div>
                }
                {isLoading ? timeIsLoading :
                    <button disabled={isLoading} className='btn' onClick={takeNum}>Throw</button>}
            </div>
        </div>
    );
}

export default App;
