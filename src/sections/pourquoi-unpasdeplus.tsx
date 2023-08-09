'use client'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(...registerables);

export default function PourquoiUnpasdeplus() {
    const data = {
        labels: ['Répétition', 'Motivation', 'Persévérance', 'Méthode', 'Régularité', 'Entraînement'],
        datasets: [{
            data: [10, 10, 10, 10, 10, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]
        }]
    }

    return (
        <section id="mon-parcours">
            <div className="container">
                <div className="pb-10">
                    <h4 className="title text-center">Un Pas de Plus</h4>
                    <p className="text-lg">fait référence au cercle vertueux du
                        mouvement physique et mental
                        , et des eff ets bénéfi ques considérables du "pas". Faire un pas qui entraîne un autre avec ces diff érents leviers :</p>
                </div>
                <div className="lg:max-w-5xl mx-auto">
                    <Doughnut
                        data={data}
                        width={500}
                        height={500}
                        options={{
                            maintainAspectRatio: false,
                        }}
                    />
                </div>
            </div>
        </section>
    )
}