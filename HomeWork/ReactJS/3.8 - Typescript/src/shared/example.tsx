import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import styles from './example.css'

//1. Работа с простыми типами

let ConcatFunc: (firstWord: string, secondWord: string) => string = function (
    firstWord,
    secondWord
): string {
    return firstWord + secondWord;
};

//2. Работа с интерфейсами

interface IMyHomeTask {
    howIDoIt: string;
    someArray: Array<string | number>;
    withData: Array<Omit<IMyHomeTask, 'withData'>>;
}

const MyHomeTask: IMyHomeTask = {
    howIDoIt: "I Do It Wel",
    someArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Wel", someArray: ["string one", 23]}],
}

//3. Типизация функций, используя Generic

interface IMyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (accumulator: U, value: T) => U, initialValue: U): U[];
}

const MyArray: IMyArray<number> = [1, 2, 3];

const initialValue = 0;
MyArray.reduce((accumulator, value) => accumulator + value, initialValue);

//4. Работа с MappedTypes

interface IHomeTask {
    data: string;
    numericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

//5*. Работа с Generic, Mapped Types, Type inference №1

interface IProps {
    firstProp: string
}

function HomeComponent(props: { firstProp: string }) {
    return (
        <div>
            {props.firstProp}
        </div>
    )
}

type FnProps<T> = T extends ((...args: infer R) => any) ? R : never;
type TMyType<T> = T extends React.ComponentType<IProps> ? FnProps<T> : false;
type TPropType = TMyType<typeof HomeComponent>;


//6*. Работа с Generic, Mapped Types, Type inference №2

type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer P, any> ? P : never
type TDivProps = TGetJSXPropsProp<'div'>

const props: TDivProps = {
    //some: '1233', // throw error потому что не содержится в атрибутах div
    className: 'handler', // не выкидывает ошибку так как валидно для div элемента
}
//=============================================================

function HeaderComponent() {
    return (
        <header>
            <h1 className={styles.example}>Hello React!</h1>
        </header>
    );
}

export const Example = hot(HeaderComponent);
