(ns tictactoe.core
  (:require [clojure.string :as s]
            [reagent.core :as r]
            [tictactoe.components :as c]))

(enable-console-print!)

(defonce app-state nil)

(def routes
  {:work "/work"
   :rambling "/rambling"
   :about "/about"
   :contact "/contact"})

(defn split-middle
  [seq]
  (let [n (/ (count seq) 2)]
    [(take n seq) (drop n seq)]))

(defn app
  []
  (letfn [(route-component [route]
            [:div.route (-> route first str rest s/join)])]
    (fn []
      [:div#container
       `[:div#route-column ~@(map route-component routes)]])))

(r/render-component [app] (. js/document (getElementById "app")))

(defn on-js-reload []
  (println "yea")
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

