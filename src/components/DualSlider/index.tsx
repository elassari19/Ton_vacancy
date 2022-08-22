import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

interface IVal {
  min: number;
  max: number;
}

interface IProps {
  min: number;
  max: number;
  onChange: ({ min, max }: IVal) => void;
}

const MultiRangeSlider: React.FC<IProps> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      // @ts-ignore
      range.current.style.left = `${minPercent}%`;
      // @ts-ignore
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, getPercent]);

  return (
    <div>
      <div className="container">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 ? 5 : 0 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>
      <div>
        <div className={styles.rangeValue}>
          <div>
            <label>
              From
              <div>
                <input
                  type="number"
                  value={minVal}
                  onChange={(e: any) => setMinVal(parseInt(e.target.value))}
                />
                Years
              </div>
            </label>
          </div>

          <div>
            <label>
              To
              <div>
                <input
                  type="number"
                  value={maxVal}
                  onChange={(e: any) => setMaxVal(parseInt(e.target.value))}
                />
                Years
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
