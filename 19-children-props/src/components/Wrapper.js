function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    width: '250px',
    margin: '10px auto',
    padding: '5px',
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
