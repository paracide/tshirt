import React from 'react';

import state from '../store/index.ts';
import {useSnapshot} from "valtio";
import {AnimatePresence, motion} from "framer-motion";
// @ts-ignore
import {slideAnimation} from '../config/motion.js'

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header>
                        <img src="/threejs.png" alt="logo" className="w-8 h-8 object-contain"/>
                    </motion.header>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
