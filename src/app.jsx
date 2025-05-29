import { useState } from 'react';
import styles from './app.module.css';
import steps from './assets/data.json';

export const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const isFirstStep = activeIndex === 0;
    const isLastStep = activeIndex === steps.length - 1;

    const goToPreviousStep = () => {
        if (!isFirstStep) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const goToNextStep = () => {
        if (!isLastStep) {
            setActiveIndex(activeIndex + 1);
        } else {
            setActiveIndex(0);
        }
    };

    const goToStep = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Инструкция по готовке пельменей</h1>
                <div className={styles.steps}>
                    <div className={styles['steps-content']}>
                        {steps[activeIndex].content}
                    </div>
                    <ul className={styles['steps-list']}>
                        {steps.map((step, index) => (
                            <li
                                key={step.id}
                                className={[
                                    styles['steps-item'],
                                    index <= activeIndex && styles.done,
                                    index === activeIndex && styles.active,
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                <button
                                    className={styles['steps-item-button']}
                                    onClick={() => goToStep(index)}
                                >
                                    {index + 1}
                                </button>
                                Шаг {index + 1}
                            </li>
                        ))}
                    </ul>
                    <div className={styles['buttons-container']}>
                        <button
                            className={styles.button}
                            disabled={isFirstStep}
                            onClick={goToPreviousStep}
                        >
                            Назад
                        </button>
                        <button className={styles.button} onClick={goToNextStep}>
                            {isLastStep ? 'Начать сначала' : 'Далее'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
