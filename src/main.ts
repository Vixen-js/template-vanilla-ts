import {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout,
  QPixmap,
  AlignmentFlag,
} from "@vixen-js/core";
import styles from "./styles/styles.css?raw";
import path from "path";

const images = path.resolve(__dirname, "./images");

const win = new QMainWindow();
win.setWindowTitle("Vixen UI Template");
win.setFixedWidth(800);
win.setFixedHeight(600);

const root = new QWidget();
const flex = new FlexLayout();
root.setLayout(flex);
root.setObjectName("root");

const label = new QLabel();
label.setText("Hello, Vixen!");
label.setObjectName("label1");

const labelImage = new QLabel();
labelImage.setObjectName("image");
labelImage.setPixmap(new QPixmap(`${images}/Logo.png`).scaled(100, 100));
labelImage.setAlignment(AlignmentFlag.AlignCenter);
labelImage.setFixedSize(100, 100);

const label2 = new QLabel();
label2.setObjectName("label2");
label2.setText("Open your main.ts and write some code!");

flex.addWidget(label);
flex.addWidget(labelImage);
flex.addWidget(label2);

win.setCentralWidget(root);
win.setStyleSheet(String(styles));
win.show();

globalThis.win = win;
