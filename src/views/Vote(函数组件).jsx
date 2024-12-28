const Vote = function Vote(props) {
  let { title } = props;
  let supNum = 10;
  let oppNum = 20;
  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">{title}</h2>
      </div>
      <div className="main">
        <p>支持人数：{supNum}</p>
        <p>反对人数:{oppNum}</p>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            supNum++;
            console.log(supNum);
          }}
        >
          支持
        </button>
        <button
          onClick={() => {
            oppNum++;
            console.log(oppNum);
          }}
        >
          反对
        </button>
      </div>
    </div>
  );
};
export default Vote;
