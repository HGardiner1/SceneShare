import React, { useState } from "react";
import "./HomePage.css";

import Monkey_D_Luffy from "./straw_hat_images/Monkey_D._Luffy.png";
import Roronoa_Zoro from "./straw_hat_images/Roronoa_Zoro.png";
import Nami from "./straw_hat_images/Nami.png";
import Usopp from "./straw_hat_images/Usopp.png";
import Sanji from "./straw_hat_images/Sanji.png";
import Tony_Tony_Chopper from "./straw_hat_images/Tony_Tony_Chopper.png";
import Nico_Robin from "./straw_hat_images/Nico_Robin.png";
import Franky from "./straw_hat_images/Franky.png";
import Brook from "./straw_hat_images/Brook.png";
import Jinbe from "./straw_hat_images/Jinbe.png";


const characters = {
  "Monkey D. Luffy": Monkey_D_Luffy,
  "Roronoa Zoro": Roronoa_Zoro,
  "Nami": Nami,
  "Usopp": Usopp,
  "Sanji": Sanji,
  "Tony Tony Chopper": Tony_Tony_Chopper,
  "Nico Robin": Nico_Robin,
  "Franky": Franky,
  "Brook": Brook,
  "Jinbe": Jinbe,
};


export default function HomePage() {
  const [selected, setSelected] = useState(new Set());
  const [message, setMessage] = useState("");
  const [episodeInfo, setEpisodeInfo] = useState(null);

  const toggle = (name) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;

    });
  };

  // --- Submit handler ---
  const handleSubmit = () => {
    const selectedArray = Array.from(selected);
    localStorage.setItem("selectedCrew", JSON.stringify(selectedArray));
    setMessage(`✅ Saved ${selectedArray.length} crew member(s)!`);

    const mockEpisodes = [1, 2, 3, 4, 5, 6];
    setEpisodeInfo({
      count: mockEpisodes.length,
      episodes: mockEpisodes,
    });
  };

  return (
    <main className="op-app">
      <div className="op-card">
        <h1 className="op-title">Straw Hat Crew Selection</h1>

        {/* Centered grid */}
        <div className="op-grid" role="grid">
          {Object.entries(characters).map(([name, imgSrc]) => {
            const isSelected = selected.has(name);
            return (
              <div
                key={name}
                className={`op-cell ${isSelected ? "is-selected" : ""}`}
                onClick={() => toggle(name)}
                role="gridcell"
                tabIndex={0}
              >
                <img
                  src={imgSrc}
                  alt={name}
                  className="op-image"
                  draggable="false"
                />
                <div className="op-name">{name}</div>
              </div>
            );
          })}
        </div>

        {/* Footer buttons */}
        <div className="op-footer">
          <span>
            Selected: <strong>{selected.size}</strong> /{" "}
            {Object.keys(characters).length}
          </span>

          <div className="op-buttons">
            {selected.size > 0 && (
              <button
                className="op-clear"
                onClick={() => setSelected(new Set())}
              >
                Clear
              </button>
            )}
            <button
              className="op-submit"
              onClick={handleSubmit}
              disabled={selected.size === 0}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Success message */}
        {message && <div className="op-message">{message}</div>}

        {/* New green segment for episode info */}
        {episodeInfo && (
          <div className="op-episode-info">
            These characters appear in the same episode in{" "}
            <strong>{episodeInfo.count}</strong> episodes.
            <br />
            {episodeInfo.episodes.join(", ")}
          </div>
        )}
      </div>
    </main>
  );
}