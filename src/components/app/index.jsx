import React from 'react';


import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import AddForm from "../addForm";
import SelectTheme from "../selectTheme";

import { connect } from 'react-redux';

function App({ theme }) {
    return (
        <div className={'app ' + theme}>
            <Header />
            <Content />
            <Footer />
            <AddForm />
            <SelectTheme />
        </div>
    )
}


const mapStateToProps = (state) => ({
    theme: state.theme
});

export default connect(mapStateToProps, null)(App);
