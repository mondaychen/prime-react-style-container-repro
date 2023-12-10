import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Tailwind from 'primereact/passthrough/tailwind';
import { PrimeReactProvider } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

// You can switch between DOM and Shadow DOM Theme vs Tailwind by
//                commenting and uncommenting below
// !!! Keep in mind it 'can' take Stackblitz or Vite some time to switch !!!

let root = document.getElementById('root');

/***************************
 *        Run in DOM       *
 ***************************/
// const mountHere = root;

// // // -- Theme -- //
// // import 'primereact/resources/themes/lara-light-indigo/theme.css';
// // const options = { unstyled: false, pt: {} };

// // -- Tailwind -- //
// import './index.css';
// const options = { unstyled: true, pt: Tailwind };

/***************************
 *     Run in Shadow DOM   *
 ***************************/
root.attachShadow({ mode: 'open' }); // Open the shadowRoot
const mountHere = root.shadowRoot; // Tell to mount on shadowRoot

// -- Theme -- //
// const options = { appendTo: mountHere };
// import font_css from './font.css?style-provider';
// import theme_css from 'primereact/resources/themes/lara-light-indigo/theme.css?style-provider';
// font_css(mountHere).mount();
// theme_css(mountHere).mount();

// -- Tailwind -- //
const options = { appendTo: mountHere, unstyled: true, pt: Tailwind, styleContainer: mountHere};
import index_css from './index.css?style-provider';
index_css(mountHere).mount();

/**
 * React
 */
const MyCalendar = () => {
  const [date, setDate] = useState(null);
  return <Calendar value={date} onChange={(e) => setDate(e.value)} />;
};

const MyDropdown = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Dropdown
        options={[
          { label: 'Hello', value: 1 },
          { label: 'World', value: 2 },
        ]}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

const MyDialog = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button label="Open Dialog..." onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        header="Lorem ipsum"
      >
        dolor sit amet, consectetur adipiscing elit...
      </Dialog>
    </>
  );
};

ReactDOM.createRoot(mountHere).render(
  <React.StrictMode>
    <PrimeReactProvider value={options}>
      <div id="react-body">
        <div className="m-2">
          Running in the
          <span className="font-bold">
            {root.shadowRoot ? ' Shadow DOM' : ' DOM'}
          </span>
        </div>

        {/* Primereact */}
        <div className="mt-6">
          <div className="m-2">Dropdown</div>
          <MyDropdown />
        </div>
        <div className="mt-6">
          <div className="m-2">Calendar (nice!)</div>
          <MyCalendar />
        </div>
        <div className="mt-6">
          <div className="m-2">Dialog (nice!)</div>
          <MyDialog />
        </div>

        {/* /Primereact */}
      </div>
    </PrimeReactProvider>
  </React.StrictMode>
);
