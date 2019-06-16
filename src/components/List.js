import React from "react";
import PropTypes from "prop-types";

const style = {
  base: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    width: "100%"
  },
  horizontal: {
    display: "flex",
    flexWrap: "wrap"
  }
};

const List = ({
  data,
  render,
  retrieveKey,
  horizontal,
  placeholderCount,
  emptyPlaceholder
}) => {
  if (data && data.length === 0 && emptyPlaceholder) return emptyPlaceholder;

  const renderedData =
    !data && placeholderCount
      ? Array(placeholderCount).fill(
          <li key={retrieveKey({})}>{render({})}</li>
        )
      : data.map(item => <li key={retrieveKey(item)}>{render(item)}</li>);
  const extraStyle = horizontal ? style.horizontal : {};
  const finalStyle = { ...style.base, ...extraStyle };
  return <ul style={finalStyle}>{renderedData}</ul>;
};

List.propTypes = {
  data: PropTypes.array,
  render: PropTypes.any,
  retrieveKey: PropTypes.func,
  horizontal: PropTypes.bool,
  placeholderCount: PropTypes.number,
  emptyPlaceholder: PropTypes.any
};

List.defaultProps = {
  emptyPlaceholder: undefined,
  data: undefined,
  horizontal: false,
  retrieveKey: () => {},
  render: item => item,
  placeholderCount: 0
};

export default List;
