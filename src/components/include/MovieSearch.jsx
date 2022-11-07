import React, { useRef } from "react";

// 1. onSearch 값을 MovieSearch로 전달
const MovieSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="movie__search">
      <div className="container">
        <h2>검색하기</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색하세요!"
          //키 입력될때
          onKeyPress={onKeyPress}
        />
        {/* 입력한 키 값 전달 */}
        <button type="submit" onClick={onClick}>
          ⚲
        </button>
      </div>
    </div>
  );
};

export default MovieSearch;
