(ns tictactoe.components
  (:require [reagent.core :as r]))

;; TOGGLE

(defn jlt-toggle-style
  [base-color]
  {:outline "none"
   :width "100px"
   :height "30px"
   :padding "0 66px 16px 0"
   :margin "5px"
   :border-style "solid"
   :border-radius "2px"
   :border-width "1px"
   :border-color base-color
   :cursor "pointer"})

(defn jlt-toggle-style-on
  [base-color]
  (merge (jlt-toggle-style base-color) 
         {:color "white"
          :background-color base-color}))

(defn jlt-toggle-style-off
  [base-color]
  (merge (jlt-toggle-style base-color) 
         {:color base-color
          :background-color "transparent"}))

(defn jlt-toggle
  [title color is-on on-toggle]
  (let [is-on (r/atom is-on)
        style-on (jlt-toggle-style-on color)
        style-off (jlt-toggle-style-off color)]
    (add-watch is-on :toggled (fn [key watched old new] (on-toggle new)))
    (fn []
      [:input {:type "button"
               :value title
               :style (if @is-on style-on style-off)
               :on-click #(swap! is-on not)}])))


;; POST HEADER

(defn jlt-post-header-style
  [base-color]
  {:color base-color
   :list-style-type "none"})

(defn jlt-post-header
  [title color]
  (fn []
    [:li {:style (jlt-post-header-style color)}
     title]))
