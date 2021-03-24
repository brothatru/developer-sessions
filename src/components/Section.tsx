import React from 'react';

type SectionProps = {
  title?: string;
};

export const Section = React.forwardRef(
  (props: SectionProps, ref: React.LegacyRef<HTMLElement> | undefined) => {
    return (
      <section className='full-height-section' ref={ref}>
        {props.title && <h2>{props.title}</h2>}
        <p>
          I'm baby kale chips drinking vinegar 90's godard hell of sriracha mumblecore 3 wolf
          moon hashtag put a bird on it kogi pug. Mustache offal beard occupy, seitan jean
          shorts ugh direct trade photo booth tilde venmo pork belly locavore vegan artisan.
          Green juice disrupt sartorial tote bag brunch enamel pin hammock, pitchfork marfa
          viral sriracha hella knausgaard man braid hashtag. Seitan chillwave artisan squid
          blue bottle biodiesel. Lumbersexual typewriter snackwave, before they sold out
          sartorial iPhone portland locavore air plant brooklyn swag thundercats cardigan. Pok
          pok skateboard kombucha farm-to-table, master cleanse live-edge cray pabst
          williamsburg normcore pickled brooklyn wolf. Godard listicle copper mug, shoreditch
          food truck flannel cray gochujang locavore kombucha raclette humblebrag. Listicle
          shabby chic beard, copper mug actually offal cred tacos vexillologist cronut
          scenester. Air plant enamel pin small batch, art party messenger bag vinyl venmo
          church-key tattooed lomo trust fund pug freegan meggings organic. Chillwave glossier
          lomo dreamcatcher shoreditch, hot chicken aesthetic activated charcoal lumbersexual
          iceland squid everyday carry hammock. Aesthetic tousled succulents tbh leggings VHS
          everyday carry kombucha. Chillwave pour-over seitan sriracha, lomo kinfolk tumeric
          direct trade narwhal banh mi. Cray jean shorts live-edge church-key, brunch narwhal
          flannel adaptogen cardigan heirloom selfies XOXO listicle. YOLO beard wayfarers,
          schlitz marfa try-hard crucifix. Plaid biodiesel craft beer four dollar toast lyft
          vinyl coloring book, synth asymmetrical keffiyeh franzen quinoa jianbing wolf. Green
          juice vexillologist YOLO woke air plant tumblr, affogato kogi waistcoat echo park hot
          chicken. Bushwick seitan fashion axe copper mug, shoreditch franzen pop-up iPhone
          hammock. Skateboard thundercats you probably haven't heard of them humblebrag
          scenester tilde kombucha pour-over live-edge roof party crucifix succulents forage.
          Pork belly yuccie microdosing photo booth kickstarter seitan meh copper mug portland
          gochujang neutra banjo coloring book. Synth tilde taiyaki single-origin coffee chia
          ethical pop-up listicle shaman. Food truck activated charcoal adaptogen beard.
          Waistcoat blue bottle flexitarian, shabby chic small batch williamsburg hexagon etsy
          bitters tousled intelligentsia mumblecore. Drinking vinegar viral iceland 90's craft
          beer typewriter coloring book artisan offal wolf neutra. Ramps copper mug put a bird
          on it cornhole pour-over aesthetic. Taxidermy cloud bread pickled, chillwave four
          loko drinking vinegar readymade pop-up synth hashtag fingerstache yr. Prism banh mi
          tattooed, neutra fashion axe stumptown freegan hashtag woke scenester distillery
          taiyaki salvia. Mustache photo booth art party succulents palo santo stumptown small
          batch.
        </p>
      </section>
    );
  },
);
