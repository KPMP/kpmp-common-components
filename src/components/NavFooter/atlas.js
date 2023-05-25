import React, { Component } from 'react';

class AtlasNavFooter extends Component {
  render() {
    return (
      <div id="footer" className="fixed-bottom px-5 py-3 text-light mx-auto">
        <div className="px-5 py-2 small lh-sm">
          The Kidney Precision Medicine Project (KPMP) is supported by grant U24 DK114886 from the <a
            className='text-light'
            href="https://www.niddk.nih.gov"
            target="_blank"
            rel="noopener noreferrer"
          >National Institute of Diabetes and Digestive and Kidney Diseases</a> (NIDDK). It is a multi-site collaboration comprised of patients, clinicians, and investigators from across the United States. This website and its content are the property of KPMP. No part of this website may be reproduced, distributed, or transmitted in any form without the prior written permission of KPMP. For permission requests, please contact us at <a className='text-light' href="mailto:info@kpmp.org?subject=Request%20to%20use%20KPMP%20content">info@kpmp.org</a>. 
        </div>
      </div>
    );
  }
}

export default AtlasNavFooter;

