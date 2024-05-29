import React from "react";

export const Skill = ({ind, list_percent, list }) => {
  const midpoint = Math.ceil(list.length / 2);

  return (
    <div className='row skills-content'>
      <div className='col-lg-6'>
        {list.map((sk, index) => {
          if (index < midpoint) {
            return (
              <div className="progress" key={index}>
                <span className='skill'>
                  {sk}
                  <i className='val'>{list_percent[index]}%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                   className={`progress-bar progress-${ind}`}
                    role="progressbar"
                    style={{ width: `${list_percent[index]}%` }}
                    aria-valuenow={list_percent[index]}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className='col-lg-6'>
        {list.map((sk, index) => {
          if (index >= midpoint) {
            return (
              <div className="progress" key={index}>
                <span className='skill'>
                  {sk}
                  <i className='val'>{list_percent[index]}%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className={`progress-bar progress-${ind}`}
                    role="progressbar"
                    style={{ width: `${list_percent[index]}%` }}
                    aria-valuenow={list_percent[index]}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

