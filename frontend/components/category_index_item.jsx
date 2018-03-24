import React from 'react';



class CategoryIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {

        const {category, changeCategory} = this.props;
        return (
            <li 
                class='post-tab' 
                onClick={changeCategory.bind(this)}
                id={`${category.id}`}
                tabIndex={`${category.id}`}
                >
                {category.name}
            </li>
        )
    }

}













export default CategoryIndexItem;