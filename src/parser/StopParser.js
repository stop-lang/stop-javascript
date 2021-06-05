// Generated from Stop.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import StopListener from './StopListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00031\u0192\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0003\u0002",
    "\u0005\u0002T\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0006\u0002",
    "Y\n\u0002\r\u0002\u000e\u0002Z\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0007\u0003c\n\u0003\f\u0003\u000e\u0003",
    "f\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0007",
    "\u0007r\n\u0007\f\u0007\u000e\u0007u\u000b\u0007\u0003\u0007\u0005\u0007",
    "x\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007|\n\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007\u0080\n\u0007\f\u0007\u000e\u0007\u0083\u000b\u0007",
    "\u0003\u0007\u0005\u0007\u0086\n\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007\u008a\n\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u008e\n\u0007",
    "\f\u0007\u000e\u0007\u0091\u000b\u0007\u0003\u0007\u0005\u0007\u0094",
    "\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0098\n\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007\u009c\n\u0007\f\u0007\u000e\u0007\u009f\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00a5",
    "\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00a9\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0005\b\u00ae\n\b\u0007\b\u00b0\n\b\f\b\u000e\b\u00b3\u000b",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00bb\n\t",
    "\u0003\n\u0003\n\u0003\n\u0005\n\u00c0\n\n\u0007\n\u00c2\n\n\f\n\u000e",
    "\n\u00c5\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u00cb\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0005\r\u00d4\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0006\u0010\u00de\n",
    "\u0010\r\u0010\u000e\u0010\u00df\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0005\u0011\u00e5\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00ea\n\u0011\u0003\u0011\u0005\u0011\u00ed\n\u0011\u0003\u0011",
    "\u0005\u0011\u00f0\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00f5\n\u0011\u0003\u0011\u0005\u0011\u00f8\n\u0011\u0005\u0011",
    "\u00fa\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00ff",
    "\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013",
    "\u0105\n\u0013\f\u0013\u000e\u0013\u0108\u000b\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u0116",
    "\n\u0015\f\u0015\u000e\u0015\u0119\u000b\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0120\n\u0017\u0007",
    "\u0017\u0122\n\u0017\f\u0017\u000e\u0017\u0125\u000b\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0005\u0018\u012b\n\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0130\n\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0005\u001a\u0135\n\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u013b\n\u001b\f\u001b\u000e",
    "\u001b\u013e\u000b\u001b\u0007\u001b\u0140\n\u001b\f\u001b\u000e\u001b",
    "\u0143\u000b\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0005\u001e\u0150\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0005 \u0158\n \u0003!\u0003!\u0003!\u0003",
    "!\u0007!\u015e\n!\f!\u000e!\u0161\u000b!\u0003\"\u0003\"\u0005\"\u0165",
    "\n\"\u0003#\u0003#\u0003#\u0003#\u0005#\u016b\n#\u0003$\u0003$\u0003",
    "$\u0003$\u0005$\u0171\n$\u0003%\u0003%\u0003%\u0005%\u0176\n%\u0003",
    "&\u0003&\u0005&\u017a\n&\u0003\'\u0003\'\u0003\'\u0003\'\u0007\'\u0180",
    "\n\'\f\'\u000e\'\u0183\u000b\'\u0007\'\u0185\n\'\f\'\u000e\'\u0188\u000b",
    "\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)",
    "\u0002\u0004\u0004(*\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNP\u0002\u0004",
    "\u0003\u0002\t\u0018\u0004\u0002++..\u0002\u01a2\u0002S\u0003\u0002",
    "\u0002\u0002\u0004\\\u0003\u0002\u0002\u0002\u0006g\u0003\u0002\u0002",
    "\u0002\bj\u0003\u0002\u0002\u0002\nm\u0003\u0002\u0002\u0002\f\u00a8",
    "\u0003\u0002\u0002\u0002\u000e\u00aa\u0003\u0002\u0002\u0002\u0010\u00ba",
    "\u0003\u0002\u0002\u0002\u0012\u00bc\u0003\u0002\u0002\u0002\u0014\u00ca",
    "\u0003\u0002\u0002\u0002\u0016\u00cc\u0003\u0002\u0002\u0002\u0018\u00d3",
    "\u0003\u0002\u0002\u0002\u001a\u00d5\u0003\u0002\u0002\u0002\u001c\u00d7",
    "\u0003\u0002\u0002\u0002\u001e\u00d9\u0003\u0002\u0002\u0002 \u00f9",
    "\u0003\u0002\u0002\u0002\"\u00fb\u0003\u0002\u0002\u0002$\u0100\u0003",
    "\u0002\u0002\u0002&\u010b\u0003\u0002\u0002\u0002(\u010f\u0003\u0002",
    "\u0002\u0002*\u011a\u0003\u0002\u0002\u0002,\u011c\u0003\u0002\u0002",
    "\u0002.\u012a\u0003\u0002\u0002\u00020\u012c\u0003\u0002\u0002\u0002",
    "2\u0131\u0003\u0002\u0002\u00024\u0136\u0003\u0002\u0002\u00026\u0146",
    "\u0003\u0002\u0002\u00028\u014a\u0003\u0002\u0002\u0002:\u014f\u0003",
    "\u0002\u0002\u0002<\u0151\u0003\u0002\u0002\u0002>\u0157\u0003\u0002",
    "\u0002\u0002@\u0159\u0003\u0002\u0002\u0002B\u0164\u0003\u0002\u0002",
    "\u0002D\u016a\u0003\u0002\u0002\u0002F\u0170\u0003\u0002\u0002\u0002",
    "H\u0172\u0003\u0002\u0002\u0002J\u0179\u0003\u0002\u0002\u0002L\u017b",
    "\u0003\u0002\u0002\u0002N\u018b\u0003\u0002\u0002\u0002P\u018f\u0003",
    "\u0002\u0002\u0002RT\u0005\u0006\u0004\u0002SR\u0003\u0002\u0002\u0002",
    "ST\u0003\u0002\u0002\u0002TX\u0003\u0002\u0002\u0002UY\u0005\b\u0005",
    "\u0002VY\u0005\f\u0007\u0002WY\u0005\u001e\u0010\u0002XU\u0003\u0002",
    "\u0002\u0002XV\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002\u0002YZ\u0003",
    "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002",
    "[\u0003\u0003\u0002\u0002\u0002\\]\b\u0003\u0001\u0002]^\u0007-\u0002",
    "\u0002^d\u0003\u0002\u0002\u0002_`\f\u0003\u0002\u0002`a\u0007*\u0002",
    "\u0002ac\u0007-\u0002\u0002b_\u0003\u0002\u0002\u0002cf\u0003\u0002",
    "\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002e\u0005",
    "\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002gh\u0007\u0003\u0002",
    "\u0002hi\u0005\u0004\u0003\u0002i\u0007\u0003\u0002\u0002\u0002jk\u0007",
    "\u0004\u0002\u0002kl\u0007.\u0002\u0002l\t\u0003\u0002\u0002\u0002m",
    "n\u0007\u0005\u0002\u0002no\u0005\u0018\r\u0002o\u000b\u0003\u0002\u0002",
    "\u0002pr\u0005H%\u0002qp\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002",
    "\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tw\u0003\u0002",
    "\u0002\u0002us\u0003\u0002\u0002\u0002vx\u0007#\u0002\u0002wv\u0003",
    "\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "y{\u0007,\u0002\u0002z|\u0005@!\u0002{z\u0003\u0002\u0002\u0002{|\u0003",
    "\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u00a9\u0005\u000e\b\u0002",
    "~\u0080\u0005H%\u0002\u007f~\u0003\u0002\u0002\u0002\u0080\u0083\u0003",
    "\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003",
    "\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003",
    "\u0002\u0002\u0002\u0084\u0086\u0007$\u0002\u0002\u0085\u0084\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003",
    "\u0002\u0002\u0002\u0087\u0089\u0007,\u0002\u0002\u0088\u008a\u0005",
    "@!\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002",
    "\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u00a9\u0005\u000e",
    "\b\u0002\u008c\u008e\u0005H%\u0002\u008d\u008c\u0003\u0002\u0002\u0002",
    "\u008e\u0091\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002",
    "\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0093\u0003\u0002\u0002\u0002",
    "\u0091\u008f\u0003\u0002\u0002\u0002\u0092\u0094\u0007%\u0002\u0002",
    "\u0093\u0092\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0097\u0007,\u0002\u0002",
    "\u0096\u0098\u0005@!\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u00a9\u0005\u000e\b\u0002\u009a\u009c\u0005H%\u0002\u009b\u009a\u0003",
    "\u0002\u0002\u0002\u009c\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a0\u0003",
    "\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007",
    ",\u0002\u0002\u00a1\u00a2\u0007\'\u0002\u0002\u00a2\u00a4\u0005> \u0002",
    "\u00a3\u00a5\u0005@!\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6",
    "\u00a7\u0005\u0012\n\u0002\u00a7\u00a9\u0003\u0002\u0002\u0002\u00a8",
    "s\u0003\u0002\u0002\u0002\u00a8\u0081\u0003\u0002\u0002\u0002\u00a8",
    "\u008f\u0003\u0002\u0002\u0002\u00a8\u009d\u0003\u0002\u0002\u0002\u00a9",
    "\r\u0003\u0002\u0002\u0002\u00aa\u00b1\u0007\u0006\u0002\u0002\u00ab",
    "\u00ad\u0005\u0010\t\u0002\u00ac\u00ae\u0007\u0007\u0002\u0002\u00ad",
    "\u00ac\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae",
    "\u00b0\u0003\u0002\u0002\u0002\u00af\u00ab\u0003\u0002\u0002\u0002\u00b0",
    "\u00b3\u0003\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1",
    "\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b4\u0003\u0002\u0002\u0002\u00b3",
    "\u00b1\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007\b\u0002\u0002\u00b5",
    "\u000f\u0003\u0002\u0002\u0002\u00b6\u00bb\u0005\u001e\u0010\u0002\u00b7",
    "\u00bb\u0005 \u0011\u0002\u00b8\u00bb\u0005D#\u0002\u00b9\u00bb\u0005",
    "F$\u0002\u00ba\u00b6\u0003\u0002\u0002\u0002\u00ba\u00b7\u0003\u0002",
    "\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00b9\u0003\u0002",
    "\u0002\u0002\u00bb\u0011\u0003\u0002\u0002\u0002\u00bc\u00c3\u0007\u0006",
    "\u0002\u0002\u00bd\u00bf\u0005\u0014\u000b\u0002\u00be\u00c0\u0007\u0007",
    "\u0002\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002",
    "\u0002\u0002\u00c0\u00c2\u0003\u0002\u0002\u0002\u00c1\u00bd\u0003\u0002",
    "\u0002\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002",
    "\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c6\u0003\u0002",
    "\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007\b",
    "\u0002\u0002\u00c7\u0013\u0003\u0002\u0002\u0002\u00c8\u00cb\u0005\u001e",
    "\u0010\u0002\u00c9\u00cb\u0005 \u0011\u0002\u00ca\u00c8\u0003\u0002",
    "\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00cb\u0015\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\t\u0002\u0002\u0002\u00cd\u0017\u0003\u0002",
    "\u0002\u0002\u00ce\u00d4\u0007,\u0002\u0002\u00cf\u00d0\u0005(\u0015",
    "\u0002\u00d0\u00d1\u0007*\u0002\u0002\u00d1\u00d2\u0007,\u0002\u0002",
    "\u00d2\u00d4\u0003\u0002\u0002\u0002\u00d3\u00ce\u0003\u0002\u0002\u0002",
    "\u00d3\u00cf\u0003\u0002\u0002\u0002\u00d4\u0019\u0003\u0002\u0002\u0002",
    "\u00d5\u00d6\u0007,\u0002\u0002\u00d6\u001b\u0003\u0002\u0002\u0002",
    "\u00d7\u00d8\u0007,\u0002\u0002\u00d8\u001d\u0003\u0002\u0002\u0002",
    "\u00d9\u00da\u0007\u0019\u0002\u0002\u00da\u00db\u0005\u001a\u000e\u0002",
    "\u00db\u00dd\u0007\u0006\u0002\u0002\u00dc\u00de\u0005\u001c\u000f\u0002",
    "\u00dd\u00dc\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002",
    "\u00df\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002",
    "\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007\b\u0002\u0002",
    "\u00e2\u001f\u0003\u0002\u0002\u0002\u00e3\u00e5\u0007)\u0002\u0002",
    "\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002",
    "\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e7\u0005:\u001e\u0002",
    "\u00e7\u00e9\u0007-\u0002\u0002\u00e8\u00ea\u0005\"\u0012\u0002\u00e9",
    "\u00e8\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea",
    "\u00ec\u0003\u0002\u0002\u0002\u00eb\u00ed\u0005,\u0017\u0002\u00ec",
    "\u00eb\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed",
    "\u00fa\u0003\u0002\u0002\u0002\u00ee\u00f0\u0007)\u0002\u0002\u00ef",
    "\u00ee\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0",
    "\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f2\u0005<\u001f\u0002\u00f2",
    "\u00f4\u0007-\u0002\u0002\u00f3\u00f5\u0005\"\u0012\u0002\u00f4\u00f3",
    "\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f7",
    "\u0003\u0002\u0002\u0002\u00f6\u00f8\u0005,\u0017\u0002\u00f7\u00f6",
    "\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00fa",
    "\u0003\u0002\u0002\u0002\u00f9\u00e4\u0003\u0002\u0002\u0002\u00f9\u00ef",
    "\u0003\u0002\u0002\u0002\u00fa!\u0003\u0002\u0002\u0002\u00fb\u00fc",
    "\u0007\'\u0002\u0002\u00fc\u00fe\u0005\u0018\r\u0002\u00fd\u00ff\u0005",
    "$\u0013\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003",
    "\u0002\u0002\u0002\u00ff#\u0003\u0002\u0002\u0002\u0100\u0101\u0007",
    "\u001a\u0002\u0002\u0101\u0106\u0005&\u0014\u0002\u0102\u0103\u0007",
    "\u001b\u0002\u0002\u0103\u0105\u0005&\u0014\u0002\u0104\u0102\u0003",
    "\u0002\u0002\u0002\u0105\u0108\u0003\u0002\u0002\u0002\u0106\u0104\u0003",
    "\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0109\u0003",
    "\u0002\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109\u010a\u0007",
    "\u001c\u0002\u0002\u010a%\u0003\u0002\u0002\u0002\u010b\u010c\u0007",
    "-\u0002\u0002\u010c\u010d\u0007\u001d\u0002\u0002\u010d\u010e\u0005",
    "*\u0016\u0002\u010e\'\u0003\u0002\u0002\u0002\u010f\u0110\b\u0015\u0001",
    "\u0002\u0110\u0111\u0007-\u0002\u0002\u0111\u0117\u0003\u0002\u0002",
    "\u0002\u0112\u0113\f\u0003\u0002\u0002\u0113\u0114\u0007*\u0002\u0002",
    "\u0114\u0116\u0007-\u0002\u0002\u0115\u0112\u0003\u0002\u0002\u0002",
    "\u0116\u0119\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002",
    "\u0117\u0118\u0003\u0002\u0002\u0002\u0118)\u0003\u0002\u0002\u0002",
    "\u0119\u0117\u0003\u0002\u0002\u0002\u011a\u011b\u0005(\u0015\u0002",
    "\u011b+\u0003\u0002\u0002\u0002\u011c\u0123\u0007\u0006\u0002\u0002",
    "\u011d\u011f\u0005.\u0018\u0002\u011e\u0120\u0007\u0007\u0002\u0002",
    "\u011f\u011e\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002",
    "\u0120\u0122\u0003\u0002\u0002\u0002\u0121\u011d\u0003\u0002\u0002\u0002",
    "\u0122\u0125\u0003\u0002\u0002\u0002\u0123\u0121\u0003\u0002\u0002\u0002",
    "\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u0126\u0003\u0002\u0002\u0002",
    "\u0125\u0123\u0003\u0002\u0002\u0002\u0126\u0127\u0007\b\u0002\u0002",
    "\u0127-\u0003\u0002\u0002\u0002\u0128\u012b\u00050\u0019\u0002\u0129",
    "\u012b\u00052\u001a\u0002\u012a\u0128\u0003\u0002\u0002\u0002\u012a",
    "\u0129\u0003\u0002\u0002\u0002\u012b/\u0003\u0002\u0002\u0002\u012c",
    "\u012f\u0007\u001e\u0002\u0002\u012d\u0130\u0005\u0018\r\u0002\u012e",
    "\u0130\u0005\n\u0006\u0002\u012f\u012d\u0003\u0002\u0002\u0002\u012f",
    "\u012e\u0003\u0002\u0002\u0002\u01301\u0003\u0002\u0002\u0002\u0131",
    "\u0132\u0007\u001f\u0002\u0002\u0132\u0134\u0007-\u0002\u0002\u0133",
    "\u0135\u00054\u001b\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0134",
    "\u0135\u0003\u0002\u0002\u0002\u01353\u0003\u0002\u0002\u0002\u0136",
    "\u0141\u0007\u001a\u0002\u0002\u0137\u013c\u00056\u001c\u0002\u0138",
    "\u0139\u0007\u001b\u0002\u0002\u0139\u013b\u00056\u001c\u0002\u013a",
    "\u0138\u0003\u0002\u0002\u0002\u013b\u013e\u0003\u0002\u0002\u0002\u013c",
    "\u013a\u0003\u0002\u0002\u0002\u013c\u013d\u0003\u0002\u0002\u0002\u013d",
    "\u0140\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013f",
    "\u0137\u0003\u0002\u0002\u0002\u0140\u0143\u0003\u0002\u0002\u0002\u0141",
    "\u013f\u0003\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142",
    "\u0144\u0003\u0002\u0002\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0144",
    "\u0145\u0007\u001c\u0002\u0002\u01455\u0003\u0002\u0002\u0002\u0146",
    "\u0147\u0007-\u0002\u0002\u0147\u0148\u0007\u001d\u0002\u0002\u0148",
    "\u0149\u00058\u001d\u0002\u01497\u0003\u0002\u0002\u0002\u014a\u014b",
    "\t\u0003\u0002\u0002\u014b9\u0003\u0002\u0002\u0002\u014c\u0150\u0005",
    "\u0016\f\u0002\u014d\u0150\u0005\u0018\r\u0002\u014e\u0150\u0005\n\u0006",
    "\u0002\u014f\u014c\u0003\u0002\u0002\u0002\u014f\u014d\u0003\u0002\u0002",
    "\u0002\u014f\u014e\u0003\u0002\u0002\u0002\u0150;\u0003\u0002\u0002",
    "\u0002\u0151\u0152\u0007 \u0002\u0002\u0152\u0153\u0005:\u001e\u0002",
    "\u0153\u0154\u0007!\u0002\u0002\u0154=\u0003\u0002\u0002\u0002\u0155",
    "\u0158\u0005<\u001f\u0002\u0156\u0158\u0005:\u001e\u0002\u0157\u0155",
    "\u0003\u0002\u0002\u0002\u0157\u0156\u0003\u0002\u0002\u0002\u0158?",
    "\u0003\u0002\u0002\u0002\u0159\u015a\u0007\"\u0002\u0002\u015a\u015f",
    "\u0005B\"\u0002\u015b\u015c\u0007\u001b\u0002\u0002\u015c\u015e\u0005",
    "B\"\u0002\u015d\u015b\u0003\u0002\u0002\u0002\u015e\u0161\u0003\u0002",
    "\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002",
    "\u0002\u0002\u0160A\u0003\u0002\u0002\u0002\u0161\u015f\u0003\u0002",
    "\u0002\u0002\u0162\u0165\u0005\u0018\r\u0002\u0163\u0165\u0005\n\u0006",
    "\u0002\u0164\u0162\u0003\u0002\u0002\u0002\u0164\u0163\u0003\u0002\u0002",
    "\u0002\u0165C\u0003\u0002\u0002\u0002\u0166\u0167\u0007&\u0002\u0002",
    "\u0167\u016b\u0005\u0018\r\u0002\u0168\u0169\u0007&\u0002\u0002\u0169",
    "\u016b\u0005\n\u0006\u0002\u016a\u0166\u0003\u0002\u0002\u0002\u016a",
    "\u0168\u0003\u0002\u0002\u0002\u016bE\u0003\u0002\u0002\u0002\u016c",
    "\u016d\u0007(\u0002\u0002\u016d\u0171\u0005\u0018\r\u0002\u016e\u016f",
    "\u0007(\u0002\u0002\u016f\u0171\u0005\n\u0006\u0002\u0170\u016c\u0003",
    "\u0002\u0002\u0002\u0170\u016e\u0003\u0002\u0002\u0002\u0171G\u0003",
    "\u0002\u0002\u0002\u0172\u0173\u0007\u0005\u0002\u0002\u0173\u0175\u0005",
    "J&\u0002\u0174\u0176\u0005L\'\u0002\u0175\u0174\u0003\u0002\u0002\u0002",
    "\u0175\u0176\u0003\u0002\u0002\u0002\u0176I\u0003\u0002\u0002\u0002",
    "\u0177\u017a\u0005\u0018\r\u0002\u0178\u017a\u0005(\u0015\u0002\u0179",
    "\u0177\u0003\u0002\u0002\u0002\u0179\u0178\u0003\u0002\u0002\u0002\u017a",
    "K\u0003\u0002\u0002\u0002\u017b\u0186\u0007\u001a\u0002\u0002\u017c",
    "\u0181\u0005N(\u0002\u017d\u017e\u0007\u001b\u0002\u0002\u017e\u0180",
    "\u0005N(\u0002\u017f\u017d\u0003\u0002\u0002\u0002\u0180\u0183\u0003",
    "\u0002\u0002\u0002\u0181\u017f\u0003\u0002\u0002\u0002\u0181\u0182\u0003",
    "\u0002\u0002\u0002\u0182\u0185\u0003\u0002\u0002\u0002\u0183\u0181\u0003",
    "\u0002\u0002\u0002\u0184\u017c\u0003\u0002\u0002\u0002\u0185\u0188\u0003",
    "\u0002\u0002\u0002\u0186\u0184\u0003\u0002\u0002\u0002\u0186\u0187\u0003",
    "\u0002\u0002\u0002\u0187\u0189\u0003\u0002\u0002\u0002\u0188\u0186\u0003",
    "\u0002\u0002\u0002\u0189\u018a\u0007\u001c\u0002\u0002\u018aM\u0003",
    "\u0002\u0002\u0002\u018b\u018c\u0007-\u0002\u0002\u018c\u018d\u0007",
    "\u001d\u0002\u0002\u018d\u018e\u0005P)\u0002\u018eO\u0003\u0002\u0002",
    "\u0002\u018f\u0190\u0007.\u0002\u0002\u0190Q\u0003\u0002\u0002\u0002",
    "5SXZdsw{\u0081\u0085\u0089\u008f\u0093\u0097\u009d\u00a4\u00a8\u00ad",
    "\u00b1\u00ba\u00bf\u00c3\u00ca\u00d3\u00df\u00e4\u00e9\u00ec\u00ef\u00f4",
    "\u00f7\u00f9\u00fe\u0106\u0117\u011f\u0123\u012a\u012f\u0134\u013c\u0141",
    "\u014f\u0157\u015f\u0164\u016a\u0170\u0175\u0179\u0181\u0186"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class StopParser extends antlr4.Parser {

    static grammarFileName = "Stop.g4";
    static literalNames = [ null, "'package'", "'include'", "'@'", "'{'", 
                            "';'", "'}'", "'double'", "'float'", "'int32'", 
                            "'int64'", "'uint32'", "'uint64'", "'sint32'", 
                            "'sint64'", "'fixed32'", "'fixed64'", "'sfixed32'", 
                            "'sfixed64'", "'bool'", "'string'", "'bytes'", 
                            "'timestamp'", "'enum'", "'('", "','", "')'", 
                            "':'", "'!state'", "'!'", "'['", "']'", "'throws'", 
                            "'start'", "'stop'", "'queue'", "'->'", "'<-'", 
                            "'>>'", "'optional'", "'.'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "START", "STOP", "QUEUE", "TRANSITION_OP", 
                             "RETURN_OP", "ENQUEUE_OP", "OPTIONAL", "DOT", 
                             "NUMBER", "MODEL_TYPE", "ID", "STRING", "COMMENT", 
                             "LINE_COMMENT", "WS" ];
    static ruleNames = [ "file", "packageName", "packageDeclaration", "include", 
                         "model_annotation", "model", "block", "statement", 
                         "return_block", "return_block_statement", "scalar_type", 
                         "model_type", "enum_type", "enum_value", "enumeration", 
                         "field", "dynamic_source", "dynamic_source_mapping", 
                         "dynamic_source_mapping_parameter", "reference", 
                         "dynamic_source_mapping_parameter_rename", "validation_block", 
                         "validation_statement", "state_validation", "validation", 
                         "validation_parameters", "validation_parameter", 
                         "validation_parameter_value", "type", "collection", 
                         "return_type", "throw_type", "throw_parameter", 
                         "transition", "enqueue", "annotation", "annotation_type", 
                         "annotation_parameters", "annotation_parameter", 
                         "annotation_parameter_value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = StopParser.ruleNames;
        this.literalNames = StopParser.literalNames;
        this.symbolicNames = StopParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.packageName_sempred(localctx, predIndex);
    	case 19:
    	    		return this.reference_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    packageName_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    reference_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, StopParser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StopParser.T__0) {
	            this.state = 80;
	            this.packageDeclaration();
	        }

	        this.state = 86; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 86;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case StopParser.T__1:
	                this.state = 83;
	                this.include();
	                break;
	            case StopParser.T__2:
	            case StopParser.START:
	            case StopParser.STOP:
	            case StopParser.QUEUE:
	            case StopParser.MODEL_TYPE:
	                this.state = 84;
	                this.model();
	                break;
	            case StopParser.T__22:
	                this.state = 85;
	                this.enumeration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 88; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__1) | (1 << StopParser.T__2) | (1 << StopParser.T__22))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (StopParser.START - 33)) | (1 << (StopParser.STOP - 33)) | (1 << (StopParser.QUEUE - 33)) | (1 << (StopParser.MODEL_TYPE - 33)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	packageName(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PackageNameContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, StopParser.RULE_packageName, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(StopParser.ID);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PackageNameContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, StopParser.RULE_packageName);
	                this.state = 93;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 94;
	                this.match(StopParser.DOT);
	                this.state = 95;
	                this.match(StopParser.ID); 
	            }
	            this.state = 100;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	packageDeclaration() {
	    let localctx = new PackageDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, StopParser.RULE_packageDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(StopParser.T__0);
	        this.state = 102;
	        this.packageName(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	include() {
	    let localctx = new IncludeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, StopParser.RULE_include);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(StopParser.T__1);
	        this.state = 105;
	        this.match(StopParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	model_annotation() {
	    let localctx = new Model_annotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, StopParser.RULE_model_annotation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(StopParser.T__2);
	        this.state = 108;
	        this.model_type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	model() {
	    let localctx = new ModelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, StopParser.RULE_model);
	    var _la = 0; // Token type
	    try {
	        this.state = 166;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===StopParser.T__2) {
	                this.state = 110;
	                this.annotation();
	                this.state = 115;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.START) {
	                this.state = 116;
	                this.match(StopParser.START);
	            }

	            this.state = 119;
	            this.match(StopParser.MODEL_TYPE);
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.T__31) {
	                this.state = 120;
	                this.throw_type();
	            }

	            this.state = 123;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===StopParser.T__2) {
	                this.state = 124;
	                this.annotation();
	                this.state = 129;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.STOP) {
	                this.state = 130;
	                this.match(StopParser.STOP);
	            }

	            this.state = 133;
	            this.match(StopParser.MODEL_TYPE);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.T__31) {
	                this.state = 134;
	                this.throw_type();
	            }

	            this.state = 137;
	            this.block();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===StopParser.T__2) {
	                this.state = 138;
	                this.annotation();
	                this.state = 143;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.QUEUE) {
	                this.state = 144;
	                this.match(StopParser.QUEUE);
	            }

	            this.state = 147;
	            this.match(StopParser.MODEL_TYPE);
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.T__31) {
	                this.state = 148;
	                this.throw_type();
	            }

	            this.state = 151;
	            this.block();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===StopParser.T__2) {
	                this.state = 152;
	                this.annotation();
	                this.state = 157;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 158;
	            this.match(StopParser.MODEL_TYPE);
	            this.state = 159;
	            this.match(StopParser.RETURN_OP);
	            this.state = 160;
	            this.return_type();
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.T__31) {
	                this.state = 161;
	                this.throw_type();
	            }

	            this.state = 164;
	            this.return_block();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, StopParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(StopParser.T__3);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__2) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20) | (1 << StopParser.T__21) | (1 << StopParser.T__22) | (1 << StopParser.T__29))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (StopParser.TRANSITION_OP - 36)) | (1 << (StopParser.ENQUEUE_OP - 36)) | (1 << (StopParser.OPTIONAL - 36)) | (1 << (StopParser.MODEL_TYPE - 36)) | (1 << (StopParser.ID - 36)))) !== 0)) {
	            this.state = 169;
	            this.statement();
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.T__4) {
	                this.state = 170;
	                this.match(StopParser.T__4);
	            }

	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
	        this.match(StopParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, StopParser.RULE_statement);
	    try {
	        this.state = 184;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StopParser.T__22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 180;
	            this.enumeration();
	            break;
	        case StopParser.T__2:
	        case StopParser.T__6:
	        case StopParser.T__7:
	        case StopParser.T__8:
	        case StopParser.T__9:
	        case StopParser.T__10:
	        case StopParser.T__11:
	        case StopParser.T__12:
	        case StopParser.T__13:
	        case StopParser.T__14:
	        case StopParser.T__15:
	        case StopParser.T__16:
	        case StopParser.T__17:
	        case StopParser.T__18:
	        case StopParser.T__19:
	        case StopParser.T__20:
	        case StopParser.T__21:
	        case StopParser.T__29:
	        case StopParser.OPTIONAL:
	        case StopParser.MODEL_TYPE:
	        case StopParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 181;
	            this.field();
	            break;
	        case StopParser.TRANSITION_OP:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 182;
	            this.transition();
	            break;
	        case StopParser.ENQUEUE_OP:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 183;
	            this.enqueue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	return_block() {
	    let localctx = new Return_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, StopParser.RULE_return_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(StopParser.T__3);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__2) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20) | (1 << StopParser.T__21) | (1 << StopParser.T__22) | (1 << StopParser.T__29))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (StopParser.OPTIONAL - 39)) | (1 << (StopParser.MODEL_TYPE - 39)) | (1 << (StopParser.ID - 39)))) !== 0)) {
	            this.state = 187;
	            this.return_block_statement();
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.T__4) {
	                this.state = 188;
	                this.match(StopParser.T__4);
	            }

	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 196;
	        this.match(StopParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	return_block_statement() {
	    let localctx = new Return_block_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, StopParser.RULE_return_block_statement);
	    try {
	        this.state = 200;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StopParser.T__22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            this.enumeration();
	            break;
	        case StopParser.T__2:
	        case StopParser.T__6:
	        case StopParser.T__7:
	        case StopParser.T__8:
	        case StopParser.T__9:
	        case StopParser.T__10:
	        case StopParser.T__11:
	        case StopParser.T__12:
	        case StopParser.T__13:
	        case StopParser.T__14:
	        case StopParser.T__15:
	        case StopParser.T__16:
	        case StopParser.T__17:
	        case StopParser.T__18:
	        case StopParser.T__19:
	        case StopParser.T__20:
	        case StopParser.T__21:
	        case StopParser.T__29:
	        case StopParser.OPTIONAL:
	        case StopParser.MODEL_TYPE:
	        case StopParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
	            this.field();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scalar_type() {
	    let localctx = new Scalar_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, StopParser.RULE_scalar_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20) | (1 << StopParser.T__21))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	model_type() {
	    let localctx = new Model_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, StopParser.RULE_model_type);
	    try {
	        this.state = 209;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StopParser.MODEL_TYPE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 204;
	            this.match(StopParser.MODEL_TYPE);
	            break;
	        case StopParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.reference(0);
	            this.state = 206;
	            this.match(StopParser.DOT);
	            this.state = 207;
	            this.match(StopParser.MODEL_TYPE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enum_type() {
	    let localctx = new Enum_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, StopParser.RULE_enum_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(StopParser.MODEL_TYPE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enum_value() {
	    let localctx = new Enum_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, StopParser.RULE_enum_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(StopParser.MODEL_TYPE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumeration() {
	    let localctx = new EnumerationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, StopParser.RULE_enumeration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(StopParser.T__22);
	        this.state = 216;
	        this.enum_type();
	        this.state = 217;
	        this.match(StopParser.T__3);
	        this.state = 219; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 218;
	            this.enum_value();
	            this.state = 221; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===StopParser.MODEL_TYPE);
	        this.state = 223;
	        this.match(StopParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, StopParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.state = 247;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 226;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.OPTIONAL) {
	                this.state = 225;
	                this.match(StopParser.OPTIONAL);
	            }

	            this.state = 228;
	            this.type();
	            this.state = 229;
	            this.match(StopParser.ID);
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.RETURN_OP) {
	                this.state = 230;
	                this.dynamic_source();
	            }

	            this.state = 234;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.T__3) {
	                this.state = 233;
	                this.validation_block();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.OPTIONAL) {
	                this.state = 236;
	                this.match(StopParser.OPTIONAL);
	            }

	            this.state = 239;
	            this.collection();
	            this.state = 240;
	            this.match(StopParser.ID);
	            this.state = 242;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.RETURN_OP) {
	                this.state = 241;
	                this.dynamic_source();
	            }

	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.T__3) {
	                this.state = 244;
	                this.validation_block();
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dynamic_source() {
	    let localctx = new Dynamic_sourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, StopParser.RULE_dynamic_source);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(StopParser.RETURN_OP);
	        this.state = 250;
	        this.model_type();
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StopParser.T__23) {
	            this.state = 251;
	            this.dynamic_source_mapping();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dynamic_source_mapping() {
	    let localctx = new Dynamic_source_mappingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, StopParser.RULE_dynamic_source_mapping);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(StopParser.T__23);
	        this.state = 255;
	        this.dynamic_source_mapping_parameter();
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===StopParser.T__24) {
	            this.state = 256;
	            this.match(StopParser.T__24);
	            this.state = 257;
	            this.dynamic_source_mapping_parameter();
	            this.state = 262;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 263;
	        this.match(StopParser.T__25);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dynamic_source_mapping_parameter() {
	    let localctx = new Dynamic_source_mapping_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, StopParser.RULE_dynamic_source_mapping_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(StopParser.ID);
	        this.state = 266;
	        this.match(StopParser.T__26);
	        this.state = 267;
	        this.dynamic_source_mapping_parameter_rename();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	reference(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ReferenceContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, StopParser.RULE_reference, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(StopParser.ID);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 277;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ReferenceContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, StopParser.RULE_reference);
	                this.state = 272;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 273;
	                this.match(StopParser.DOT);
	                this.state = 274;
	                this.match(StopParser.ID); 
	            }
	            this.state = 279;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	dynamic_source_mapping_parameter_rename() {
	    let localctx = new Dynamic_source_mapping_parameter_renameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, StopParser.RULE_dynamic_source_mapping_parameter_rename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.reference(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	validation_block() {
	    let localctx = new Validation_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, StopParser.RULE_validation_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this.match(StopParser.T__3);
	        this.state = 289;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===StopParser.T__27 || _la===StopParser.T__28) {
	            this.state = 283;
	            this.validation_statement();
	            this.state = 285;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===StopParser.T__4) {
	                this.state = 284;
	                this.match(StopParser.T__4);
	            }

	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 292;
	        this.match(StopParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	validation_statement() {
	    let localctx = new Validation_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, StopParser.RULE_validation_statement);
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StopParser.T__27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 294;
	            this.state_validation();
	            break;
	        case StopParser.T__28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
	            this.validation();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	state_validation() {
	    let localctx = new State_validationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, StopParser.RULE_state_validation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(StopParser.T__27);
	        this.state = 301;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StopParser.MODEL_TYPE:
	        case StopParser.ID:
	            this.state = 299;
	            this.model_type();
	            break;
	        case StopParser.T__2:
	            this.state = 300;
	            this.model_annotation();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	validation() {
	    let localctx = new ValidationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, StopParser.RULE_validation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(StopParser.T__28);
	        this.state = 304;
	        this.match(StopParser.ID);
	        this.state = 306;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StopParser.T__23) {
	            this.state = 305;
	            this.validation_parameters();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	validation_parameters() {
	    let localctx = new Validation_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, StopParser.RULE_validation_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(StopParser.T__23);
	        this.state = 319;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===StopParser.ID) {
	            this.state = 309;
	            this.validation_parameter();
	            this.state = 314;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===StopParser.T__24) {
	                this.state = 310;
	                this.match(StopParser.T__24);
	                this.state = 311;
	                this.validation_parameter();
	                this.state = 316;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 321;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 322;
	        this.match(StopParser.T__25);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	validation_parameter() {
	    let localctx = new Validation_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, StopParser.RULE_validation_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this.match(StopParser.ID);
	        this.state = 325;
	        this.match(StopParser.T__26);
	        this.state = 326;
	        this.validation_parameter_value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	validation_parameter_value() {
	    let localctx = new Validation_parameter_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, StopParser.RULE_validation_parameter_value);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        _la = this._input.LA(1);
	        if(!(_la===StopParser.NUMBER || _la===StopParser.STRING)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, StopParser.RULE_type);
	    try {
	        this.state = 333;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StopParser.T__6:
	        case StopParser.T__7:
	        case StopParser.T__8:
	        case StopParser.T__9:
	        case StopParser.T__10:
	        case StopParser.T__11:
	        case StopParser.T__12:
	        case StopParser.T__13:
	        case StopParser.T__14:
	        case StopParser.T__15:
	        case StopParser.T__16:
	        case StopParser.T__17:
	        case StopParser.T__18:
	        case StopParser.T__19:
	        case StopParser.T__20:
	        case StopParser.T__21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 330;
	            this.scalar_type();
	            break;
	        case StopParser.MODEL_TYPE:
	        case StopParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 331;
	            this.model_type();
	            break;
	        case StopParser.T__2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 332;
	            this.model_annotation();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	collection() {
	    let localctx = new CollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, StopParser.RULE_collection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(StopParser.T__29);
	        this.state = 336;
	        this.type();
	        this.state = 337;
	        this.match(StopParser.T__30);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	return_type() {
	    let localctx = new Return_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, StopParser.RULE_return_type);
	    try {
	        this.state = 341;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StopParser.T__29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 339;
	            this.collection();
	            break;
	        case StopParser.T__2:
	        case StopParser.T__6:
	        case StopParser.T__7:
	        case StopParser.T__8:
	        case StopParser.T__9:
	        case StopParser.T__10:
	        case StopParser.T__11:
	        case StopParser.T__12:
	        case StopParser.T__13:
	        case StopParser.T__14:
	        case StopParser.T__15:
	        case StopParser.T__16:
	        case StopParser.T__17:
	        case StopParser.T__18:
	        case StopParser.T__19:
	        case StopParser.T__20:
	        case StopParser.T__21:
	        case StopParser.MODEL_TYPE:
	        case StopParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 340;
	            this.type();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	throw_type() {
	    let localctx = new Throw_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, StopParser.RULE_throw_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this.match(StopParser.T__31);
	        this.state = 344;
	        this.throw_parameter();
	        this.state = 349;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===StopParser.T__24) {
	            this.state = 345;
	            this.match(StopParser.T__24);
	            this.state = 346;
	            this.throw_parameter();
	            this.state = 351;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	throw_parameter() {
	    let localctx = new Throw_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, StopParser.RULE_throw_parameter);
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case StopParser.MODEL_TYPE:
	        case StopParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 352;
	            this.model_type();
	            break;
	        case StopParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 353;
	            this.model_annotation();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transition() {
	    let localctx = new TransitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, StopParser.RULE_transition);
	    try {
	        this.state = 360;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 356;
	            this.match(StopParser.TRANSITION_OP);
	            this.state = 357;
	            this.model_type();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 358;
	            this.match(StopParser.TRANSITION_OP);
	            this.state = 359;
	            this.model_annotation();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enqueue() {
	    let localctx = new EnqueueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, StopParser.RULE_enqueue);
	    try {
	        this.state = 366;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 362;
	            this.match(StopParser.ENQUEUE_OP);
	            this.state = 363;
	            this.model_type();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 364;
	            this.match(StopParser.ENQUEUE_OP);
	            this.state = 365;
	            this.model_annotation();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	annotation() {
	    let localctx = new AnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, StopParser.RULE_annotation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 368;
	        this.match(StopParser.T__2);
	        this.state = 369;
	        this.annotation_type();
	        this.state = 371;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===StopParser.T__23) {
	            this.state = 370;
	            this.annotation_parameters();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	annotation_type() {
	    let localctx = new Annotation_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, StopParser.RULE_annotation_type);
	    try {
	        this.state = 375;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 373;
	            this.model_type();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 374;
	            this.reference(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	annotation_parameters() {
	    let localctx = new Annotation_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, StopParser.RULE_annotation_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(StopParser.T__23);
	        this.state = 388;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===StopParser.ID) {
	            this.state = 378;
	            this.annotation_parameter();
	            this.state = 383;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===StopParser.T__24) {
	                this.state = 379;
	                this.match(StopParser.T__24);
	                this.state = 380;
	                this.annotation_parameter();
	                this.state = 385;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 390;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 391;
	        this.match(StopParser.T__25);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	annotation_parameter() {
	    let localctx = new Annotation_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, StopParser.RULE_annotation_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(StopParser.ID);
	        this.state = 394;
	        this.match(StopParser.T__26);
	        this.state = 395;
	        this.annotation_parameter_value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	annotation_parameter_value() {
	    let localctx = new Annotation_parameter_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, StopParser.RULE_annotation_parameter_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.match(StopParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

StopParser.EOF = antlr4.Token.EOF;
StopParser.T__0 = 1;
StopParser.T__1 = 2;
StopParser.T__2 = 3;
StopParser.T__3 = 4;
StopParser.T__4 = 5;
StopParser.T__5 = 6;
StopParser.T__6 = 7;
StopParser.T__7 = 8;
StopParser.T__8 = 9;
StopParser.T__9 = 10;
StopParser.T__10 = 11;
StopParser.T__11 = 12;
StopParser.T__12 = 13;
StopParser.T__13 = 14;
StopParser.T__14 = 15;
StopParser.T__15 = 16;
StopParser.T__16 = 17;
StopParser.T__17 = 18;
StopParser.T__18 = 19;
StopParser.T__19 = 20;
StopParser.T__20 = 21;
StopParser.T__21 = 22;
StopParser.T__22 = 23;
StopParser.T__23 = 24;
StopParser.T__24 = 25;
StopParser.T__25 = 26;
StopParser.T__26 = 27;
StopParser.T__27 = 28;
StopParser.T__28 = 29;
StopParser.T__29 = 30;
StopParser.T__30 = 31;
StopParser.T__31 = 32;
StopParser.START = 33;
StopParser.STOP = 34;
StopParser.QUEUE = 35;
StopParser.TRANSITION_OP = 36;
StopParser.RETURN_OP = 37;
StopParser.ENQUEUE_OP = 38;
StopParser.OPTIONAL = 39;
StopParser.DOT = 40;
StopParser.NUMBER = 41;
StopParser.MODEL_TYPE = 42;
StopParser.ID = 43;
StopParser.STRING = 44;
StopParser.COMMENT = 45;
StopParser.LINE_COMMENT = 46;
StopParser.WS = 47;

StopParser.RULE_file = 0;
StopParser.RULE_packageName = 1;
StopParser.RULE_packageDeclaration = 2;
StopParser.RULE_include = 3;
StopParser.RULE_model_annotation = 4;
StopParser.RULE_model = 5;
StopParser.RULE_block = 6;
StopParser.RULE_statement = 7;
StopParser.RULE_return_block = 8;
StopParser.RULE_return_block_statement = 9;
StopParser.RULE_scalar_type = 10;
StopParser.RULE_model_type = 11;
StopParser.RULE_enum_type = 12;
StopParser.RULE_enum_value = 13;
StopParser.RULE_enumeration = 14;
StopParser.RULE_field = 15;
StopParser.RULE_dynamic_source = 16;
StopParser.RULE_dynamic_source_mapping = 17;
StopParser.RULE_dynamic_source_mapping_parameter = 18;
StopParser.RULE_reference = 19;
StopParser.RULE_dynamic_source_mapping_parameter_rename = 20;
StopParser.RULE_validation_block = 21;
StopParser.RULE_validation_statement = 22;
StopParser.RULE_state_validation = 23;
StopParser.RULE_validation = 24;
StopParser.RULE_validation_parameters = 25;
StopParser.RULE_validation_parameter = 26;
StopParser.RULE_validation_parameter_value = 27;
StopParser.RULE_type = 28;
StopParser.RULE_collection = 29;
StopParser.RULE_return_type = 30;
StopParser.RULE_throw_type = 31;
StopParser.RULE_throw_parameter = 32;
StopParser.RULE_transition = 33;
StopParser.RULE_enqueue = 34;
StopParser.RULE_annotation = 35;
StopParser.RULE_annotation_type = 36;
StopParser.RULE_annotation_parameters = 37;
StopParser.RULE_annotation_parameter = 38;
StopParser.RULE_annotation_parameter_value = 39;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_file;
    }

	packageDeclaration() {
	    return this.getTypedRuleContext(PackageDeclarationContext,0);
	};

	include = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IncludeContext);
	    } else {
	        return this.getTypedRuleContext(IncludeContext,i);
	    }
	};

	model = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModelContext);
	    } else {
	        return this.getTypedRuleContext(ModelContext,i);
	    }
	};

	enumeration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumerationContext);
	    } else {
	        return this.getTypedRuleContext(EnumerationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitFile(this);
		}
	}


}



class PackageNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_packageName;
    }

	ID() {
	    return this.getToken(StopParser.ID, 0);
	};

	packageName() {
	    return this.getTypedRuleContext(PackageNameContext,0);
	};

	DOT() {
	    return this.getToken(StopParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterPackageName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitPackageName(this);
		}
	}


}



class PackageDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_packageDeclaration;
    }

	packageName() {
	    return this.getTypedRuleContext(PackageNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterPackageDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitPackageDeclaration(this);
		}
	}


}



class IncludeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_include;
    }

	STRING() {
	    return this.getToken(StopParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterInclude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitInclude(this);
		}
	}


}



class Model_annotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_model_annotation;
    }

	model_type() {
	    return this.getTypedRuleContext(Model_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterModel_annotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitModel_annotation(this);
		}
	}


}



class ModelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_model;
    }

	MODEL_TYPE() {
	    return this.getToken(StopParser.MODEL_TYPE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	annotation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnnotationContext);
	    } else {
	        return this.getTypedRuleContext(AnnotationContext,i);
	    }
	};

	START() {
	    return this.getToken(StopParser.START, 0);
	};

	throw_type() {
	    return this.getTypedRuleContext(Throw_typeContext,0);
	};

	STOP() {
	    return this.getToken(StopParser.STOP, 0);
	};

	QUEUE() {
	    return this.getToken(StopParser.QUEUE, 0);
	};

	RETURN_OP() {
	    return this.getToken(StopParser.RETURN_OP, 0);
	};

	return_type() {
	    return this.getTypedRuleContext(Return_typeContext,0);
	};

	return_block() {
	    return this.getTypedRuleContext(Return_blockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterModel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitModel(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitBlock(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_statement;
    }

	enumeration() {
	    return this.getTypedRuleContext(EnumerationContext,0);
	};

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	transition() {
	    return this.getTypedRuleContext(TransitionContext,0);
	};

	enqueue() {
	    return this.getTypedRuleContext(EnqueueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Return_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_return_block;
    }

	return_block_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Return_block_statementContext);
	    } else {
	        return this.getTypedRuleContext(Return_block_statementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterReturn_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitReturn_block(this);
		}
	}


}



class Return_block_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_return_block_statement;
    }

	enumeration() {
	    return this.getTypedRuleContext(EnumerationContext,0);
	};

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterReturn_block_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitReturn_block_statement(this);
		}
	}


}



class Scalar_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_scalar_type;
    }


	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterScalar_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitScalar_type(this);
		}
	}


}



class Model_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_model_type;
    }

	MODEL_TYPE() {
	    return this.getToken(StopParser.MODEL_TYPE, 0);
	};

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	DOT() {
	    return this.getToken(StopParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterModel_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitModel_type(this);
		}
	}


}



class Enum_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_enum_type;
    }

	MODEL_TYPE() {
	    return this.getToken(StopParser.MODEL_TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterEnum_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitEnum_type(this);
		}
	}


}



class Enum_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_enum_value;
    }

	MODEL_TYPE() {
	    return this.getToken(StopParser.MODEL_TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterEnum_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitEnum_value(this);
		}
	}


}



class EnumerationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_enumeration;
    }

	enum_type() {
	    return this.getTypedRuleContext(Enum_typeContext,0);
	};

	enum_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Enum_valueContext);
	    } else {
	        return this.getTypedRuleContext(Enum_valueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterEnumeration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitEnumeration(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_field;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	ID() {
	    return this.getToken(StopParser.ID, 0);
	};

	OPTIONAL() {
	    return this.getToken(StopParser.OPTIONAL, 0);
	};

	dynamic_source() {
	    return this.getTypedRuleContext(Dynamic_sourceContext,0);
	};

	validation_block() {
	    return this.getTypedRuleContext(Validation_blockContext,0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitField(this);
		}
	}


}



class Dynamic_sourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_dynamic_source;
    }

	RETURN_OP() {
	    return this.getToken(StopParser.RETURN_OP, 0);
	};

	model_type() {
	    return this.getTypedRuleContext(Model_typeContext,0);
	};

	dynamic_source_mapping() {
	    return this.getTypedRuleContext(Dynamic_source_mappingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterDynamic_source(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitDynamic_source(this);
		}
	}


}



class Dynamic_source_mappingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_dynamic_source_mapping;
    }

	dynamic_source_mapping_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dynamic_source_mapping_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Dynamic_source_mapping_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterDynamic_source_mapping(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitDynamic_source_mapping(this);
		}
	}


}



class Dynamic_source_mapping_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_dynamic_source_mapping_parameter;
    }

	ID() {
	    return this.getToken(StopParser.ID, 0);
	};

	dynamic_source_mapping_parameter_rename() {
	    return this.getTypedRuleContext(Dynamic_source_mapping_parameter_renameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterDynamic_source_mapping_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitDynamic_source_mapping_parameter(this);
		}
	}


}



class ReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_reference;
    }

	ID() {
	    return this.getToken(StopParser.ID, 0);
	};

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	DOT() {
	    return this.getToken(StopParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitReference(this);
		}
	}


}



class Dynamic_source_mapping_parameter_renameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_dynamic_source_mapping_parameter_rename;
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterDynamic_source_mapping_parameter_rename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitDynamic_source_mapping_parameter_rename(this);
		}
	}


}



class Validation_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_validation_block;
    }

	validation_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Validation_statementContext);
	    } else {
	        return this.getTypedRuleContext(Validation_statementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterValidation_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitValidation_block(this);
		}
	}


}



class Validation_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_validation_statement;
    }

	state_validation() {
	    return this.getTypedRuleContext(State_validationContext,0);
	};

	validation() {
	    return this.getTypedRuleContext(ValidationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterValidation_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitValidation_statement(this);
		}
	}


}



class State_validationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_state_validation;
    }

	model_type() {
	    return this.getTypedRuleContext(Model_typeContext,0);
	};

	model_annotation() {
	    return this.getTypedRuleContext(Model_annotationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterState_validation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitState_validation(this);
		}
	}


}



class ValidationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_validation;
    }

	ID() {
	    return this.getToken(StopParser.ID, 0);
	};

	validation_parameters() {
	    return this.getTypedRuleContext(Validation_parametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterValidation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitValidation(this);
		}
	}


}



class Validation_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_validation_parameters;
    }

	validation_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Validation_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Validation_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterValidation_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitValidation_parameters(this);
		}
	}


}



class Validation_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_validation_parameter;
    }

	ID() {
	    return this.getToken(StopParser.ID, 0);
	};

	validation_parameter_value() {
	    return this.getTypedRuleContext(Validation_parameter_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterValidation_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitValidation_parameter(this);
		}
	}


}



class Validation_parameter_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_validation_parameter_value;
    }

	STRING() {
	    return this.getToken(StopParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(StopParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterValidation_parameter_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitValidation_parameter_value(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_type;
    }

	scalar_type() {
	    return this.getTypedRuleContext(Scalar_typeContext,0);
	};

	model_type() {
	    return this.getTypedRuleContext(Model_typeContext,0);
	};

	model_annotation() {
	    return this.getTypedRuleContext(Model_annotationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitType(this);
		}
	}


}



class CollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_collection;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitCollection(this);
		}
	}


}



class Return_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_return_type;
    }

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterReturn_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitReturn_type(this);
		}
	}


}



class Throw_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_throw_type;
    }

	throw_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Throw_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Throw_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterThrow_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitThrow_type(this);
		}
	}


}



class Throw_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_throw_parameter;
    }

	model_type() {
	    return this.getTypedRuleContext(Model_typeContext,0);
	};

	model_annotation() {
	    return this.getTypedRuleContext(Model_annotationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterThrow_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitThrow_parameter(this);
		}
	}


}



class TransitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_transition;
    }

	TRANSITION_OP() {
	    return this.getToken(StopParser.TRANSITION_OP, 0);
	};

	model_type() {
	    return this.getTypedRuleContext(Model_typeContext,0);
	};

	model_annotation() {
	    return this.getTypedRuleContext(Model_annotationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterTransition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitTransition(this);
		}
	}


}



class EnqueueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_enqueue;
    }

	ENQUEUE_OP() {
	    return this.getToken(StopParser.ENQUEUE_OP, 0);
	};

	model_type() {
	    return this.getTypedRuleContext(Model_typeContext,0);
	};

	model_annotation() {
	    return this.getTypedRuleContext(Model_annotationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterEnqueue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitEnqueue(this);
		}
	}


}



class AnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_annotation;
    }

	annotation_type() {
	    return this.getTypedRuleContext(Annotation_typeContext,0);
	};

	annotation_parameters() {
	    return this.getTypedRuleContext(Annotation_parametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitAnnotation(this);
		}
	}


}



class Annotation_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_annotation_type;
    }

	model_type() {
	    return this.getTypedRuleContext(Model_typeContext,0);
	};

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterAnnotation_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitAnnotation_type(this);
		}
	}


}



class Annotation_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_annotation_parameters;
    }

	annotation_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Annotation_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Annotation_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterAnnotation_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitAnnotation_parameters(this);
		}
	}


}



class Annotation_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_annotation_parameter;
    }

	ID() {
	    return this.getToken(StopParser.ID, 0);
	};

	annotation_parameter_value() {
	    return this.getTypedRuleContext(Annotation_parameter_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterAnnotation_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitAnnotation_parameter(this);
		}
	}


}



class Annotation_parameter_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StopParser.RULE_annotation_parameter_value;
    }

	STRING() {
	    return this.getToken(StopParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.enterAnnotation_parameter_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof StopListener ) {
	        listener.exitAnnotation_parameter_value(this);
		}
	}


}




StopParser.FileContext = FileContext; 
StopParser.PackageNameContext = PackageNameContext; 
StopParser.PackageDeclarationContext = PackageDeclarationContext; 
StopParser.IncludeContext = IncludeContext; 
StopParser.Model_annotationContext = Model_annotationContext; 
StopParser.ModelContext = ModelContext; 
StopParser.BlockContext = BlockContext; 
StopParser.StatementContext = StatementContext; 
StopParser.Return_blockContext = Return_blockContext; 
StopParser.Return_block_statementContext = Return_block_statementContext; 
StopParser.Scalar_typeContext = Scalar_typeContext; 
StopParser.Model_typeContext = Model_typeContext; 
StopParser.Enum_typeContext = Enum_typeContext; 
StopParser.Enum_valueContext = Enum_valueContext; 
StopParser.EnumerationContext = EnumerationContext; 
StopParser.FieldContext = FieldContext; 
StopParser.Dynamic_sourceContext = Dynamic_sourceContext; 
StopParser.Dynamic_source_mappingContext = Dynamic_source_mappingContext; 
StopParser.Dynamic_source_mapping_parameterContext = Dynamic_source_mapping_parameterContext; 
StopParser.ReferenceContext = ReferenceContext; 
StopParser.Dynamic_source_mapping_parameter_renameContext = Dynamic_source_mapping_parameter_renameContext; 
StopParser.Validation_blockContext = Validation_blockContext; 
StopParser.Validation_statementContext = Validation_statementContext; 
StopParser.State_validationContext = State_validationContext; 
StopParser.ValidationContext = ValidationContext; 
StopParser.Validation_parametersContext = Validation_parametersContext; 
StopParser.Validation_parameterContext = Validation_parameterContext; 
StopParser.Validation_parameter_valueContext = Validation_parameter_valueContext; 
StopParser.TypeContext = TypeContext; 
StopParser.CollectionContext = CollectionContext; 
StopParser.Return_typeContext = Return_typeContext; 
StopParser.Throw_typeContext = Throw_typeContext; 
StopParser.Throw_parameterContext = Throw_parameterContext; 
StopParser.TransitionContext = TransitionContext; 
StopParser.EnqueueContext = EnqueueContext; 
StopParser.AnnotationContext = AnnotationContext; 
StopParser.Annotation_typeContext = Annotation_typeContext; 
StopParser.Annotation_parametersContext = Annotation_parametersContext; 
StopParser.Annotation_parameterContext = Annotation_parameterContext; 
StopParser.Annotation_parameter_valueContext = Annotation_parameter_valueContext; 
