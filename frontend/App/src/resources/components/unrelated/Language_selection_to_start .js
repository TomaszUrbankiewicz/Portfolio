import React, { useState } from 'react';

const Language_selection_to_start = () => {

    return(
        <section id="language_selection" className="container_selection">
            <div className='filter_box'></div>
            <div className='container_flag'>
                <div className="box box_polish">
                    <div className='box_text_language'>
                        <div className='text_language'>
                            <p>wybierz język Polski</p>
                        </div>
                    </div>
                </div>
                <div className="box box_english">
                    <div className='box_text_language'>
                            <div className='text_language'>
                                <p>choose English language</p>
                            </div>
                        </div>
                    </div>
                <div className="box box_russian">
                    <div className='box_text_language'>
                            <div className='text_language'>
                                <p>выбрать русский язык</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};
export default Language_selection_to_start ;