import React, { FC, useState } from "react";
import cn from "classnames";
import s from "./PlaceInput.module.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import SuggestionItem from "../SuggestionItem";
import { LocationIcon } from "../svg";
import Loader from "react-loader-spinner";

const PlaceInput = () => {
  const [address, setaddress] = useState("");

  const handleChange = (addr: string) => {
    setaddress(addr);
  };

  const handleSelect = (addr: string) => {
    geocodeByAddress(addr)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  return (
    <div className={s.root}>
      <div className={s.labels}>
        <p>kote</p>
        <p>locación</p>
        <p>emplacement</p>
        <p>location</p>
      </div>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={s.inputContainer}>
            <input
              {...getInputProps({
                placeholder: "ciudad, país",
                className: s.inputBox,
              })}
            />
            <div className={s.inputIcon}>
              {loading ? (
                <Loader type="Oval" color="#AAAAAA" width={18} height={18} />
              ) : (
                <LocationIcon />
              )}
            </div>
            <div
              className={cn(s.dropdownContainer, {
                [s.dropDownOpen]: suggestions.length > 0,
              })}
            >
              {suggestions.map((suggestion) => (
                <React.Fragment key={suggestion.id}>
                  <SuggestionItem
                    {...getSuggestionItemProps(suggestion, {
                      suggestion,
                      loading,
                    })}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default PlaceInput;
