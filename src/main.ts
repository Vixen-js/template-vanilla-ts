import {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout,
  QPixmap,
  AlignmentFlag,
  QIcon,
} from "@vixen-js/core";
import styles from "./assets/styles/styles.css?raw";
import tsImage from "./assets/images/typescript.svg";
import logoImg from "./assets/images/Logo.png";

const win = new QMainWindow();
win.setWindowTitle("Vixen UI Template");
win.setFixedWidth(800);
win.setFixedHeight(600);
win.setWindowIcon(new QIcon(tsImage));

const root = new QWidget();
const flex = new FlexLayout();
root.setLayout(flex);
root.setObjectName("root");

const label = new QLabel();
label.setText("Hello, Vixen Ui!");
label.setObjectName("label1");

const labelImage = new QLabel();
labelImage.setObjectName("image");
labelImage.setPixmap(new QPixmap(logoImg).scaled(100, 100));
labelImage.setAlignment(AlignmentFlag.AlignCenter);
labelImage.setFixedSize(100, 100);

const label2 = new QLabel();
label2.setObjectName("label2");
label2.setText("Open your main.ts and write some code to see the changes!");

flex.addWidget(label);
flex.addWidget(labelImage);
flex.addWidget(label2);

win.setCentralWidget(root);
win.setStyleSheet(String(styles));
win.show();

global.win = win;
