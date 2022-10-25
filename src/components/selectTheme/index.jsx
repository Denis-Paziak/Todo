import React from 'react';
import { connect } from 'react-redux';
import { HiX } from 'react-icons/hi';


function SelectTheme({ switchTheme, status, statusSwitchTheme }) {

    let classTheme = "";

    if (status) {
        classTheme = "active";
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }

    return (
        <div className={'previewAllTheme ' + classTheme}>
            <div className="close" onClick={statusSwitchTheme}><HiX /></div>
            <h2>Dark</h2>
            <div className='previewTheme dark' onClick={() => { switchTheme("dark") }}>
                <div className="previewTheme__item">
                    <div className="previewTheme__checkBox"></div>
                    <div className="previewTheme__text">
                        <div className='previewTheme__title'></div>
                        <div className='previewTheme__desc'></div>
                    </div>
                </div>
            </div>

            <h2>Light</h2>
            <div className='previewTheme light' onClick={() => { switchTheme("light") }}>
                <div className="previewTheme__item">
                    <div className="previewTheme__checkBox"></div>
                    <div className="previewTheme__text">
                        <div className='previewTheme__title'></div>
                        <div className='previewTheme__desc'></div>
                    </div>
                </div>
            </div>

            <h2> Dark Red</h2>
            <div className='previewTheme dark-red'
                onClick={() => { switchTheme("dark-red") }}>
                <div className="previewTheme__item">
                    <div className="previewTheme__checkBox"></div>
                    <div className="previewTheme__text">
                        <div className='previewTheme__title'></div>
                        <div className='previewTheme__desc'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        status: state.switchThemeStatus
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        switchTheme: (theme) => dispatch({ type: 'Theme', theme }),
        statusSwitchTheme: () => dispatch({ type: 'StatusSwitchTheme' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTheme);
