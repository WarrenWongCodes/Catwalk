import React, { useState, useEffect } from "react";
import { Card, Icon, Image, Rating } from "semantic-ui-react";
import $ from "jquery";
import "../styles/style.css";
import axios from "axios";
import KEYS from "/config.js";

export default function CardComponent({ product }) {
  const [relatedImage, setRelatedImages] = useState([
    "https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif",
  ]);
  const currentProductID = product.id;

  const options = {
    baseURL: `${KEYS.ENDPOINT}`,
    headers: {
      Authorization: `${KEYS.API_KEY}`,
    },
  };

  const getDefaultImage = (results) => {
    for (let i = 0; i < results.length; i++) {
      if (results[i]["default?"] !== false) {
        // console.log(results[i].photos[0].thumbnail_url);
        return results[i].photos[0].thumbnail_url;
      }
      if (results[0].photos[0].thumbnail_url === null) {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
      }
    }

    return results[0].photos[0].thumbnail_url;
  };

  $(document).ready(function () {
    // Lift card and show stats on Mouseover
    $("#product-card").hover(
      function () {
        $(this).addClass("animate");
        $("div.carouselNext, div.carouselPrev").addClass("visible");
      },
      function () {
        $(this).removeClass("animate");
        $("div.carouselNext, div.carouselPrev").removeClass("visible");
      }
    );

    // Flip card to the back side
    $("#view_details").click(function () {
      $("div.carouselNext, div.carouselPrev").removeClass("visible");
      $("#product-card").addClass("flip-10");
      setTimeout(function () {
        $("#product-card")
          .removeClass("flip-10")
          .addClass("flip90")
          .find("div.shadow")
          .show()
          .fadeTo(80, 1, function () {
            $("#product-front, #product-front div.shadow").hide();
          });
      }, 50);

      setTimeout(function () {
        $("#product-card").removeClass("flip90").addClass("flip190");
        $("#product-back").show().find("div.shadow").show().fadeTo(90, 0);
        setTimeout(function () {
          $("#product-card")
            .removeClass("flip190")
            .addClass("flip180")
            .find("div.shadow")
            .hide();
          setTimeout(function () {
            $("#product-card").css("transition", "100ms ease-out");
            $("#cx, #cy").addClass("s1");
            setTimeout(function () {
              $("#cx, #cy").addClass("s2");
            }, 100);
            setTimeout(function () {
              $("#cx, #cy").addClass("s3");
            }, 200);
            $("div.carouselNext, div.carouselPrev").addClass("visible");
          }, 100);
        }, 100);
      }, 150);
    });

    // Flip card back to the front side
    $("#flip-back").click(function () {
      $("#product-card").removeClass("flip180").addClass("flip190");
      setTimeout(function () {
        $("#product-card").removeClass("flip190").addClass("flip90");

        $("#product-back div.shadow")
          .css("opacity", 0)
          .fadeTo(100, 1, function () {
            $("#product-back, #product-back div.shadow").hide();
            $("#product-front, #product-front div.shadow").show();
          });
      }, 50);

      setTimeout(function () {
        $("#product-card").removeClass("flip90").addClass("flip-10");
        $("#product-front div.shadow").show().fadeTo(100, 0);
        setTimeout(function () {
          $("#product-front div.shadow").hide();
          $("#product-card")
            .removeClass("flip-10")
            .css("transition", "100ms ease-out");
          $("#cx, #cy").removeClass("s1 s2 s3");
        }, 100);
      }, 150);
    });

    /* ----  Image Gallery Carousel   ---- */

    var carousel = $("#carousel ul");
    var carouselSlideWidth = 335;
    var carouselWidth = 0;
    var isAnimating = false;

    // building the width of the casousel
    $("#carousel li").each(function () {
      carouselWidth += carouselSlideWidth;
    });
    $(carousel).css("width", carouselWidth);

    // Load Next Image
    $("div.carouselNext").on("click", function () {
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft + carouselSlideWidth;
      if (newLeft == carouselWidth || isAnimating === true) {
        return;
      }
      $("#carousel ul").css({
        left: "-" + newLeft + "px",
        transition: "300ms ease-out",
      });
      isAnimating = true;
      setTimeout(function () {
        isAnimating = false;
      }, 300);
    });

    // Load Previous Image
    $("div.carouselPrev").on("click", function () {
      var currentLeft = Math.abs(parseInt($(carousel).css("left")));
      var newLeft = currentLeft - carouselSlideWidth;
      if (newLeft < 0 || isAnimating === true) {
        return;
      }
      $("#carousel ul").css({
        left: "-" + newLeft + "px",
        transition: "300ms ease-out",
      });
      isAnimating = true;
      setTimeout(function () {
        isAnimating = false;
      }, 300);
    });
  });

  if (product.id !== undefined) {
    useEffect(() => {
      // console.log(currentProductID);
      axios
        .get(`/products/${currentProductID}/styles/?default=true`, options)
        .then((res) => {
          // console.log("Why are we not getting here????", res.data.results);
          setRelatedImages(getDefaultImage(res.data.results));
        });
    }, []);
  }

  return (
    <div className="card">
      <div>
        <p>
          <button>*</button>
        </p>
        <img className="slide-img" src={`${relatedImage}`} />
        <p>{`${product.category}`}</p>
        <h4>{`${product.name}`}</h4>
        <p className="price">${`${product.default_price}`}</p>
      </div>
    </div>
    // <Card>
    //   <img src={`${relatedImage}`} height={"300"} />
    //   <Card.Content>
    //     <Card.Meta>{product.category}</Card.Meta>
    //     <Card.Header>{product.name}</Card.Header>
    //     <Card.Description>
    //       {"$"}
    //       {product.default_price}
    //     </Card.Description>
    //     <Rating defaultRating={3} maxRating={5} disabled />
    //   </Card.Content>
    // </Card>
  );
}
