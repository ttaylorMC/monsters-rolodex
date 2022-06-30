// import { Component } from 'react';
import { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={"search-box${className"}
    type={"search"}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

// const SearchBox = ({ className, placeholder, onChangeHandler }) => (
//   <input
//     className={"search-box ${this.props.className}"}
//     type="search"
//     placeholder={placeholder}
//     onChange={(e) => onChangeHandler(e)}
//   />
// );

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={"search-box ${this.props.className}"}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// };

export default SearchBox;
