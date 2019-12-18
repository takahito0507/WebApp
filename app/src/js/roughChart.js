"use strict";

function MyFunction() {
    new roughViz.Bar(
        {
            element: '#vis0',
            // data: [[1,2], [5, 6], [8,8], [5, 100], [200, 10], [50, 50]],
            data: 'https://gist.githubusercontent.com/mbostock/3310560/raw/98311dc46685ed02588afdcb69e5fa296febc1eb/letter-frequency.tsv',
            title: 'Letters',
            labels: 'letter',
            values: 'frequency',
            width: window.innerWidth,
            stroke: 'coral',
            strokeWidth: 3,
            color: 'pink',
            fillWeight: 1.5,
        }
    );

    new roughViz.BarH(
        {
            element: '#vis1',
            title: "Vehicles I've Had",
            titleFontSize: '1.5rem',
            legend: false,
            margin: { top: 50, bottom: 100, left: 160, right: 0 },
            data: {
                labels: ['1992 Ford Aerostar Van', '2013 Kia Rio', '1980 Honda CB 125s', '1992 Toyota Tercel'],
                values: [8, 4, 6, 2]
            },
            xLabel: 'Time Owned (Years)',
            strokeWidth: 2,
            fillStyle: 'zigzag-line',
            highlight: 'gold',
        }
    );

    new roughViz.BarH(
        {
            element: '#vis2',
            titleFontSize: '1.5rem',
            //       margin: {top: 50, bottom: 100, left: 60, right: 0},
            data: 'https://raw.githubusercontent.com/jwilber/random_data/master/owTanks.csv',
            color: 'tan',
            labels: 'name',
            values: 'health',
            title: "Overwatch Tank Health",
            roughness: 4,
        }
    );
    new roughViz.Donut(
        {
            element: '#vis3',
            legend: false,
            data: {
                labels: ['JNCO Jeans', 'Sweat Pants', 'Jorts'],
                values: [20, 10, 2]
            },
            title: 'Pants I Got Clowned On For Wearing In High School',
            titleFontSize: '2rem',
            labels: 'letter',
            values: 'frequency',
            width: window.innerWidth,
            stroke: 'coral',
            //     strokeWidth: 3,
            color: 'pink',
            fillWeight: 1.5,
        }
    );
    let ttop = 50;
    let rright = 20;
    let bbottom = 45;
    let width = 300;


    new roughViz.Line(
        {
            element: '#vis4',
            data: 'https://raw.githubusercontent.com/jwilber/random_data/master/tweets.csv',
            title: 'Line Chart',
            // x: 'gdpPercap',
            y: 'favorites',
            y2: 'retweets',
            y3: 'tweets',
            yLabel: 'hey',
            colorVar: 'continent',
            highlightLabel: 'country',
            highlight: 'red',
            fillWeight: 2,
            roughness: 3.5,
            width: window.innerWidth / 1.2,
            height: 500,
        }
    );

    new roughViz.Pie(
        {
            element: '#vis6',
            titleFontSize: '1.5rem',
            margin: { top: 50, bottom: 100, left: 40, right: 100 },
            data: {
                labels: ['yes', 'no', 'lol idk man'],
                values: [2, 8, 4]
            },
            title: "'Yarn Plot': Useful?",
            roughness: 25,
            strokeWidth: 5,
            innerStrokeWidth: 5,
        }
    );

    new roughViz.Pie(
        {
            element: '#vis7',
            titleFontSize: '1.5rem',
            legend: false,
            margin: { top: 50, bottom: 100, left: 40, right: 100 },
            data: {
                labels: ['useful', 'no', 'lol idk man'],
                values: [2, 8, 4]
            },
            strokeWidth: 3,
            fillStyle: 'zigzag-line',
            highlight: 'gold',
        }
    );

    new roughViz.Scatter(
        {
            element: '#vis8',
            data: 'https://raw.githubusercontent.com/uiuc-cse/data-fa14/gh-pages/data/iris.csv',
            title: 'Iris Scatter Plot',
            x: 'sepal_width',
            y: 'petal_length',
            colorVar: 'species',
            highlightLabel: 'species',
            fillWeight: 4,
            radius: 12,
            colors: ['pink', 'coral', 'skyblue'],
            stroke: 'black',
            strokeWidth: 0.4,
            roughness: 1,
            width: 400,
            height: 450,
            font: 0,
            xLabel: 'sepal width',
            yLabel: 'petal length',
            curbZero: false,
        })

    new roughViz.Scatter(
        {
            element: '#vis9',
            data: {
                x: [1, 2, 3, 7, 5, 9],
                y: [240, 40, 40, 160, 100],
            },
            title: 'Some Random (x,y) Data',
            width: 400,
            roughness: 0,
            radius: [25, 10, 40, 30, 60],
            fillWeight: 3,
            axisRoughness: 1,
            height: 450,
            colors: ['green', 'red', 'blue', 'black']
        }
    );

    new roughViz.StackedBar({
        element: '#vis10',
        data: [
            { month: 'Jan', A: 20, B: 5, C: 10 },
            { month: 'Feb', A: 25, B: 10, C: 20 },
            { month: 'March', A: 30, B: 50, C: 10 }

        ],
        labels: 'month',
        title: 'Monthly Revenue',
        height: window.innerHeight * 0.7,
        width: window.innerWidth * 0.8,
        roughness: 2,
        colors: [
            'blue',
            '#f996ae',
            'skyblue',
            '#9ff4df',
        ],
        fillWeight: 0.35,
        strokeWidth: 0.5,
        fillStyle: 'cross-hatch',
        stroke: 'black',
    });
};