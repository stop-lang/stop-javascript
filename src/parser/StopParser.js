// Generated from ../stop/Stop.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StopListener = require('./StopListener').StopListener;
var grammarFileName = "Stop.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u00ff\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0003\u0002\u0005\u0002:\n\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0006\u0002?\n\u0002\r\u0002\u000e\u0002@\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003I\n\u0003\f\u0003\u000e\u0003L\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0005\u0006",
    "U\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006Y\n\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006]\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006a\n\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006e\n\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006i\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006p\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "t\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007y\n\u0007\u0007",
    "\u0007{\n\u0007\f\u0007\u000e\u0007~\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u0086\n\b\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u008b\n\t\u0007\t\u008d\n\t\f\t\u000e\t\u0090\u000b\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0005\n\u0096\n\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u009f\n\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0006\u000f\u00a9\n\u000f\r\u000f\u000e\u000f\u00aa\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0005\u0010\u00b0\n\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00b5\n\u0010\u0003\u0010\u0005\u0010",
    "\u00b8\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00bd",
    "\n\u0010\u0005\u0010\u00bf\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u00c4\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0007\u0012\u00ca\n\u0012\f\u0012\u000e\u0012\u00cd\u000b\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0007\u0014\u00db\n\u0014\f\u0014\u000e\u0014\u00de\u000b\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u00e4\n\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0005\u0018\u00ec\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0007\u0019\u00f2\n\u0019\f\u0019\u000e\u0019\u00f5\u000b\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0002\u0004\u0004&\u001d\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.0246\u0002\u0003\u0003\u0002\b\u0017\u0002\u0107\u00029\u0003",
    "\u0002\u0002\u0002\u0004B\u0003\u0002\u0002\u0002\u0006M\u0003\u0002",
    "\u0002\u0002\bP\u0003\u0002\u0002\u0002\ns\u0003\u0002\u0002\u0002\f",
    "u\u0003\u0002\u0002\u0002\u000e\u0085\u0003\u0002\u0002\u0002\u0010",
    "\u0087\u0003\u0002\u0002\u0002\u0012\u0095\u0003\u0002\u0002\u0002\u0014",
    "\u0097\u0003\u0002\u0002\u0002\u0016\u009e\u0003\u0002\u0002\u0002\u0018",
    "\u00a0\u0003\u0002\u0002\u0002\u001a\u00a2\u0003\u0002\u0002\u0002\u001c",
    "\u00a4\u0003\u0002\u0002\u0002\u001e\u00be\u0003\u0002\u0002\u0002 ",
    "\u00c0\u0003\u0002\u0002\u0002\"\u00c5\u0003\u0002\u0002\u0002$\u00d0",
    "\u0003\u0002\u0002\u0002&\u00d4\u0003\u0002\u0002\u0002(\u00df\u0003",
    "\u0002\u0002\u0002*\u00e3\u0003\u0002\u0002\u0002,\u00e5\u0003\u0002",
    "\u0002\u0002.\u00eb\u0003\u0002\u0002\u00020\u00ed\u0003\u0002\u0002",
    "\u00022\u00f6\u0003\u0002\u0002\u00024\u00f8\u0003\u0002\u0002\u0002",
    "6\u00fb\u0003\u0002\u0002\u00028:\u0005\u0006\u0004\u000298\u0003\u0002",
    "\u0002\u00029:\u0003\u0002\u0002\u0002:>\u0003\u0002\u0002\u0002;?\u0005",
    "\b\u0005\u0002<?\u0005\n\u0006\u0002=?\u0005\u001c\u000f\u0002>;\u0003",
    "\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002",
    "?@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002A\u0003\u0003\u0002\u0002\u0002BC\b\u0003\u0001\u0002CD\u0007",
    "*\u0002\u0002DJ\u0003\u0002\u0002\u0002EF\f\u0003\u0002\u0002FG\u0007",
    "\'\u0002\u0002GI\u0007*\u0002\u0002HE\u0003\u0002\u0002\u0002IL\u0003",
    "\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002",
    "K\u0005\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MN\u0007\u0003",
    "\u0002\u0002NO\u0005\u0004\u0003\u0002O\u0007\u0003\u0002\u0002\u0002",
    "PQ\u0007\u0004\u0002\u0002QR\u0007+\u0002\u0002R\t\u0003\u0002\u0002",
    "\u0002SU\u0007 \u0002\u0002TS\u0003\u0002\u0002\u0002TU\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0007)\u0002\u0002WY\u0005",
    "0\u0019\u0002XW\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YZ",
    "\u0003\u0002\u0002\u0002Zt\u0005\f\u0007\u0002[]\u0007!\u0002\u0002",
    "\\[\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\u0003\u0002",
    "\u0002\u0002^`\u0007)\u0002\u0002_a\u00050\u0019\u0002`_\u0003\u0002",
    "\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bt\u0005",
    "\f\u0007\u0002ce\u0007\"\u0002\u0002dc\u0003\u0002\u0002\u0002de\u0003",
    "\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fh\u0007)\u0002\u0002gi",
    "\u00050\u0019\u0002hg\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002",
    "ij\u0003\u0002\u0002\u0002jt\u0005\f\u0007\u0002kl\u0007)\u0002\u0002",
    "lm\u0007$\u0002\u0002mo\u0005.\u0018\u0002np\u00050\u0019\u0002on\u0003",
    "\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002",
    "qr\u0005\u0010\t\u0002rt\u0003\u0002\u0002\u0002sT\u0003\u0002\u0002",
    "\u0002s\\\u0003\u0002\u0002\u0002sd\u0003\u0002\u0002\u0002sk\u0003",
    "\u0002\u0002\u0002t\u000b\u0003\u0002\u0002\u0002u|\u0007\u0005\u0002",
    "\u0002vx\u0005\u000e\b\u0002wy\u0007\u0006\u0002\u0002xw\u0003\u0002",
    "\u0002\u0002xy\u0003\u0002\u0002\u0002y{\u0003\u0002\u0002\u0002zv\u0003",
    "\u0002\u0002\u0002{~\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002",
    "|}\u0003\u0002\u0002\u0002}\u007f\u0003\u0002\u0002\u0002~|\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0007\u0007\u0002\u0002\u0080\r\u0003\u0002",
    "\u0002\u0002\u0081\u0086\u0005\u001c\u000f\u0002\u0082\u0086\u0005\u001e",
    "\u0010\u0002\u0083\u0086\u00054\u001b\u0002\u0084\u0086\u00056\u001c",
    "\u0002\u0085\u0081\u0003\u0002\u0002\u0002\u0085\u0082\u0003\u0002\u0002",
    "\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0084\u0003\u0002\u0002",
    "\u0002\u0086\u000f\u0003\u0002\u0002\u0002\u0087\u008e\u0007\u0005\u0002",
    "\u0002\u0088\u008a\u0005\u0012\n\u0002\u0089\u008b\u0007\u0006\u0002",
    "\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002",
    "\u0002\u008b\u008d\u0003\u0002\u0002\u0002\u008c\u0088\u0003\u0002\u0002",
    "\u0002\u008d\u0090\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002",
    "\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0091\u0003\u0002\u0002",
    "\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u0007\u0002",
    "\u0002\u0092\u0011\u0003\u0002\u0002\u0002\u0093\u0096\u0005\u001c\u000f",
    "\u0002\u0094\u0096\u0005\u001e\u0010\u0002\u0095\u0093\u0003\u0002\u0002",
    "\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0096\u0013\u0003\u0002\u0002",
    "\u0002\u0097\u0098\t\u0002\u0002\u0002\u0098\u0015\u0003\u0002\u0002",
    "\u0002\u0099\u009f\u0007)\u0002\u0002\u009a\u009b\u0005&\u0014\u0002",
    "\u009b\u009c\u0007\'\u0002\u0002\u009c\u009d\u0007)\u0002\u0002\u009d",
    "\u009f\u0003\u0002\u0002\u0002\u009e\u0099\u0003\u0002\u0002\u0002\u009e",
    "\u009a\u0003\u0002\u0002\u0002\u009f\u0017\u0003\u0002\u0002\u0002\u00a0",
    "\u00a1\u0007)\u0002\u0002\u00a1\u0019\u0003\u0002\u0002\u0002\u00a2",
    "\u00a3\u0007)\u0002\u0002\u00a3\u001b\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0007\u0018\u0002\u0002\u00a5\u00a6\u0005\u0018\r\u0002\u00a6",
    "\u00a8\u0007\u0005\u0002\u0002\u00a7\u00a9\u0005\u001a\u000e\u0002\u00a8",
    "\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa",
    "\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u0007\u0002\u0002\u00ad",
    "\u001d\u0003\u0002\u0002\u0002\u00ae\u00b0\u0007&\u0002\u0002\u00af",
    "\u00ae\u0003\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0",
    "\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2\u0005*\u0016\u0002\u00b2",
    "\u00b4\u0007*\u0002\u0002\u00b3\u00b5\u0005 \u0011\u0002\u00b4\u00b3",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00bf",
    "\u0003\u0002\u0002\u0002\u00b6\u00b8\u0007&\u0002\u0002\u00b7\u00b6",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\u0005,\u0017\u0002\u00ba\u00bc",
    "\u0007*\u0002\u0002\u00bb\u00bd\u0005 \u0011\u0002\u00bc\u00bb\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00bf\u0003",
    "\u0002\u0002\u0002\u00be\u00af\u0003\u0002\u0002\u0002\u00be\u00b7\u0003",
    "\u0002\u0002\u0002\u00bf\u001f\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007",
    "$\u0002\u0002\u00c1\u00c3\u0005\u0016\f\u0002\u00c2\u00c4\u0005\"\u0012",
    "\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002",
    "\u0002\u00c4!\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007\u0019\u0002",
    "\u0002\u00c6\u00cb\u0005$\u0013\u0002\u00c7\u00c8\u0007\u001a\u0002",
    "\u0002\u00c8\u00ca\u0005$\u0013\u0002\u00c9\u00c7\u0003\u0002\u0002",
    "\u0002\u00ca\u00cd\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00ce\u0003\u0002\u0002",
    "\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007\u001b\u0002",
    "\u0002\u00cf#\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007*\u0002\u0002",
    "\u00d1\u00d2\u0007\u001c\u0002\u0002\u00d2\u00d3\u0005(\u0015\u0002",
    "\u00d3%\u0003\u0002\u0002\u0002\u00d4\u00d5\b\u0014\u0001\u0002\u00d5",
    "\u00d6\u0007*\u0002\u0002\u00d6\u00dc\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\f\u0003\u0002\u0002\u00d8\u00d9\u0007\'\u0002\u0002\u00d9\u00db",
    "\u0007*\u0002\u0002\u00da\u00d7\u0003\u0002\u0002\u0002\u00db\u00de",
    "\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00dd",
    "\u0003\u0002\u0002\u0002\u00dd\'\u0003\u0002\u0002\u0002\u00de\u00dc",
    "\u0003\u0002\u0002\u0002\u00df\u00e0\u0005&\u0014\u0002\u00e0)\u0003",
    "\u0002\u0002\u0002\u00e1\u00e4\u0005\u0014\u000b\u0002\u00e2\u00e4\u0005",
    "\u0016\f\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e2\u0003",
    "\u0002\u0002\u0002\u00e4+\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007",
    "\u001d\u0002\u0002\u00e6\u00e7\u0005*\u0016\u0002\u00e7\u00e8\u0007",
    "\u001e\u0002\u0002\u00e8-\u0003\u0002\u0002\u0002\u00e9\u00ec\u0005",
    ",\u0017\u0002\u00ea\u00ec\u0005*\u0016\u0002\u00eb\u00e9\u0003\u0002",
    "\u0002\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec/\u0003\u0002",
    "\u0002\u0002\u00ed\u00ee\u0007\u001f\u0002\u0002\u00ee\u00f3\u00052",
    "\u001a\u0002\u00ef\u00f0\u0007\u001a\u0002\u0002\u00f0\u00f2\u00052",
    "\u001a\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2\u00f5\u0003\u0002",
    "\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002",
    "\u0002\u0002\u00f41\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002",
    "\u0002\u0002\u00f6\u00f7\u0005\u0016\f\u0002\u00f73\u0003\u0002\u0002",
    "\u0002\u00f8\u00f9\u0007#\u0002\u0002\u00f9\u00fa\u0005\u0016\f\u0002",
    "\u00fa5\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007%\u0002\u0002\u00fc",
    "\u00fd\u0005\u0016\f\u0002\u00fd7\u0003\u0002\u0002\u0002!9>@JTX\\`",
    "dhosx|\u0085\u008a\u008e\u0095\u009e\u00aa\u00af\u00b4\u00b7\u00bc\u00be",
    "\u00c3\u00cb\u00dc\u00e3\u00eb\u00f3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'package'", "'include'", "'{'", "';'", "'}'", 
                     "'double'", "'float'", "'int32'", "'int64'", "'uint32'", 
                     "'uint64'", "'sint32'", "'sint64'", "'fixed32'", "'fixed64'", 
                     "'sfixed32'", "'sfixed64'", "'bool'", "'string'", "'bytes'", 
                     "'timestamp'", "'enum'", "'('", "','", "')'", "':'", 
                     "'['", "']'", "'throws'", "'start'", "'stop'", "'queue'", 
                     "'->'", "'<-'", "'>>'", "'optional'", "'.'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "START", "STOP", "QUEUE", "TRANSITION_OP", 
                      "RETURN_OP", "ENQUEUE_OP", "OPTIONAL", "DOT", "NUMBER", 
                      "MODEL_TYPE", "ID", "FILENAME", "COMMENT", "LINE_COMMENT", 
                      "WS" ];

var ruleNames =  [ "file", "packageName", "packageDeclaration", "include", 
                   "model", "block", "statement", "return_block", "return_block_statement", 
                   "scalar_type", "model_type", "enum_type", "enum_value", 
                   "enumeration", "field", "dynamic_source", "dynamic_source_mapping", 
                   "dynamic_source_mapping_parameter", "reference", "dynamic_source_mapping_parameter_rename", 
                   "type", "collection", "return_type", "throw_type", "throw_parameter", 
                   "transition", "enqueue" ];

function StopParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

StopParser.prototype = Object.create(antlr4.Parser.prototype);
StopParser.prototype.constructor = StopParser;

Object.defineProperty(StopParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

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
StopParser.START = 30;
StopParser.STOP = 31;
StopParser.QUEUE = 32;
StopParser.TRANSITION_OP = 33;
StopParser.RETURN_OP = 34;
StopParser.ENQUEUE_OP = 35;
StopParser.OPTIONAL = 36;
StopParser.DOT = 37;
StopParser.NUMBER = 38;
StopParser.MODEL_TYPE = 39;
StopParser.ID = 40;
StopParser.FILENAME = 41;
StopParser.COMMENT = 42;
StopParser.LINE_COMMENT = 43;
StopParser.WS = 44;

StopParser.RULE_file = 0;
StopParser.RULE_packageName = 1;
StopParser.RULE_packageDeclaration = 2;
StopParser.RULE_include = 3;
StopParser.RULE_model = 4;
StopParser.RULE_block = 5;
StopParser.RULE_statement = 6;
StopParser.RULE_return_block = 7;
StopParser.RULE_return_block_statement = 8;
StopParser.RULE_scalar_type = 9;
StopParser.RULE_model_type = 10;
StopParser.RULE_enum_type = 11;
StopParser.RULE_enum_value = 12;
StopParser.RULE_enumeration = 13;
StopParser.RULE_field = 14;
StopParser.RULE_dynamic_source = 15;
StopParser.RULE_dynamic_source_mapping = 16;
StopParser.RULE_dynamic_source_mapping_parameter = 17;
StopParser.RULE_reference = 18;
StopParser.RULE_dynamic_source_mapping_parameter_rename = 19;
StopParser.RULE_type = 20;
StopParser.RULE_collection = 21;
StopParser.RULE_return_type = 22;
StopParser.RULE_throw_type = 23;
StopParser.RULE_throw_parameter = 24;
StopParser.RULE_transition = 25;
StopParser.RULE_enqueue = 26;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.packageDeclaration = function() {
    return this.getTypedRuleContext(PackageDeclarationContext,0);
};

FileContext.prototype.include = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeContext);
    } else {
        return this.getTypedRuleContext(IncludeContext,i);
    }
};

FileContext.prototype.model = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ModelContext);
    } else {
        return this.getTypedRuleContext(ModelContext,i);
    }
};

FileContext.prototype.enumeration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EnumerationContext);
    } else {
        return this.getTypedRuleContext(EnumerationContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitFile(this);
	}
};




StopParser.FileContext = FileContext;

StopParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StopParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StopParser.T__0) {
            this.state = 54;
            this.packageDeclaration();
        }

        this.state = 60; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 60;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case StopParser.T__1:
                this.state = 57;
                this.include();
                break;
            case StopParser.START:
            case StopParser.STOP:
            case StopParser.QUEUE:
            case StopParser.MODEL_TYPE:
                this.state = 58;
                this.model();
                break;
            case StopParser.T__21:
                this.state = 59;
                this.enumeration();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 62; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__1) | (1 << StopParser.T__21) | (1 << StopParser.START) | (1 << StopParser.STOP))) !== 0) || _la===StopParser.QUEUE || _la===StopParser.MODEL_TYPE);
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
};

function PackageNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_packageName;
    return this;
}

PackageNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PackageNameContext.prototype.constructor = PackageNameContext;

PackageNameContext.prototype.ID = function() {
    return this.getToken(StopParser.ID, 0);
};

PackageNameContext.prototype.packageName = function() {
    return this.getTypedRuleContext(PackageNameContext,0);
};

PackageNameContext.prototype.DOT = function() {
    return this.getToken(StopParser.DOT, 0);
};

PackageNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterPackageName(this);
	}
};

PackageNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitPackageName(this);
	}
};



StopParser.prototype.packageName = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new PackageNameContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, StopParser.RULE_packageName, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(StopParser.ID);
        this._ctx.stop = this._input.LT(-1);
        this.state = 72;
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
                this.state = 67;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 68;
                this.match(StopParser.DOT);
                this.state = 69;
                this.match(StopParser.ID); 
            }
            this.state = 74;
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
};

function PackageDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_packageDeclaration;
    return this;
}

PackageDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PackageDeclarationContext.prototype.constructor = PackageDeclarationContext;

PackageDeclarationContext.prototype.packageName = function() {
    return this.getTypedRuleContext(PackageNameContext,0);
};

PackageDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterPackageDeclaration(this);
	}
};

PackageDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitPackageDeclaration(this);
	}
};




StopParser.PackageDeclarationContext = PackageDeclarationContext;

StopParser.prototype.packageDeclaration = function() {

    var localctx = new PackageDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StopParser.RULE_packageDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(StopParser.T__0);
        this.state = 76;
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
};

function IncludeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_include;
    return this;
}

IncludeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeContext.prototype.constructor = IncludeContext;

IncludeContext.prototype.FILENAME = function() {
    return this.getToken(StopParser.FILENAME, 0);
};

IncludeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterInclude(this);
	}
};

IncludeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitInclude(this);
	}
};




StopParser.IncludeContext = IncludeContext;

StopParser.prototype.include = function() {

    var localctx = new IncludeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StopParser.RULE_include);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(StopParser.T__1);
        this.state = 79;
        this.match(StopParser.FILENAME);
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
};

function ModelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_model;
    return this;
}

ModelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModelContext.prototype.constructor = ModelContext;

ModelContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

ModelContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ModelContext.prototype.START = function() {
    return this.getToken(StopParser.START, 0);
};

ModelContext.prototype.throw_type = function() {
    return this.getTypedRuleContext(Throw_typeContext,0);
};

ModelContext.prototype.STOP = function() {
    return this.getToken(StopParser.STOP, 0);
};

ModelContext.prototype.QUEUE = function() {
    return this.getToken(StopParser.QUEUE, 0);
};

ModelContext.prototype.RETURN_OP = function() {
    return this.getToken(StopParser.RETURN_OP, 0);
};

ModelContext.prototype.return_type = function() {
    return this.getTypedRuleContext(Return_typeContext,0);
};

ModelContext.prototype.return_block = function() {
    return this.getTypedRuleContext(Return_blockContext,0);
};

ModelContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterModel(this);
	}
};

ModelContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitModel(this);
	}
};




StopParser.ModelContext = ModelContext;

StopParser.prototype.model = function() {

    var localctx = new ModelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, StopParser.RULE_model);
    var _la = 0; // Token type
    try {
        this.state = 113;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.START) {
                this.state = 81;
                this.match(StopParser.START);
            }

            this.state = 84;
            this.match(StopParser.MODEL_TYPE);
            this.state = 86;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 85;
                this.throw_type();
            }

            this.state = 88;
            this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.STOP) {
                this.state = 89;
                this.match(StopParser.STOP);
            }

            this.state = 92;
            this.match(StopParser.MODEL_TYPE);
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 93;
                this.throw_type();
            }

            this.state = 96;
            this.block();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.QUEUE) {
                this.state = 97;
                this.match(StopParser.QUEUE);
            }

            this.state = 100;
            this.match(StopParser.MODEL_TYPE);
            this.state = 102;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 101;
                this.throw_type();
            }

            this.state = 104;
            this.block();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 105;
            this.match(StopParser.MODEL_TYPE);
            this.state = 106;
            this.match(StopParser.RETURN_OP);
            this.state = 107;
            this.return_type();
            this.state = 109;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 108;
                this.throw_type();
            }

            this.state = 111;
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
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitBlock(this);
	}
};




StopParser.BlockContext = BlockContext;

StopParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, StopParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(StopParser.T__2);
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__5) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20) | (1 << StopParser.T__21) | (1 << StopParser.T__26))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (StopParser.TRANSITION_OP - 33)) | (1 << (StopParser.ENQUEUE_OP - 33)) | (1 << (StopParser.OPTIONAL - 33)) | (1 << (StopParser.MODEL_TYPE - 33)) | (1 << (StopParser.ID - 33)))) !== 0)) {
            this.state = 116;
            this.statement();
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 117;
                this.match(StopParser.T__3);
            }

            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 125;
        this.match(StopParser.T__4);
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
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.enumeration = function() {
    return this.getTypedRuleContext(EnumerationContext,0);
};

StatementContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

StatementContext.prototype.transition = function() {
    return this.getTypedRuleContext(TransitionContext,0);
};

StatementContext.prototype.enqueue = function() {
    return this.getTypedRuleContext(EnqueueContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitStatement(this);
	}
};




StopParser.StatementContext = StatementContext;

StopParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, StopParser.RULE_statement);
    try {
        this.state = 131;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.enumeration();
            break;
        case StopParser.T__5:
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
        case StopParser.T__26:
        case StopParser.OPTIONAL:
        case StopParser.MODEL_TYPE:
        case StopParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.field();
            break;
        case StopParser.TRANSITION_OP:
            this.enterOuterAlt(localctx, 3);
            this.state = 129;
            this.transition();
            break;
        case StopParser.ENQUEUE_OP:
            this.enterOuterAlt(localctx, 4);
            this.state = 130;
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
};

function Return_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_return_block;
    return this;
}

Return_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_blockContext.prototype.constructor = Return_blockContext;

Return_blockContext.prototype.return_block_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Return_block_statementContext);
    } else {
        return this.getTypedRuleContext(Return_block_statementContext,i);
    }
};

Return_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterReturn_block(this);
	}
};

Return_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitReturn_block(this);
	}
};




StopParser.Return_blockContext = Return_blockContext;

StopParser.prototype.return_block = function() {

    var localctx = new Return_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, StopParser.RULE_return_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(StopParser.T__2);
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__5) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20) | (1 << StopParser.T__21) | (1 << StopParser.T__26))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (StopParser.OPTIONAL - 36)) | (1 << (StopParser.MODEL_TYPE - 36)) | (1 << (StopParser.ID - 36)))) !== 0)) {
            this.state = 134;
            this.return_block_statement();
            this.state = 136;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 135;
                this.match(StopParser.T__3);
            }

            this.state = 142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 143;
        this.match(StopParser.T__4);
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
};

function Return_block_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_return_block_statement;
    return this;
}

Return_block_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_block_statementContext.prototype.constructor = Return_block_statementContext;

Return_block_statementContext.prototype.enumeration = function() {
    return this.getTypedRuleContext(EnumerationContext,0);
};

Return_block_statementContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Return_block_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterReturn_block_statement(this);
	}
};

Return_block_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitReturn_block_statement(this);
	}
};




StopParser.Return_block_statementContext = Return_block_statementContext;

StopParser.prototype.return_block_statement = function() {

    var localctx = new Return_block_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, StopParser.RULE_return_block_statement);
    try {
        this.state = 147;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 145;
            this.enumeration();
            break;
        case StopParser.T__5:
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
        case StopParser.T__26:
        case StopParser.OPTIONAL:
        case StopParser.MODEL_TYPE:
        case StopParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
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
};

function Scalar_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_scalar_type;
    return this;
}

Scalar_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scalar_typeContext.prototype.constructor = Scalar_typeContext;


Scalar_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterScalar_type(this);
	}
};

Scalar_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitScalar_type(this);
	}
};




StopParser.Scalar_typeContext = Scalar_typeContext;

StopParser.prototype.scalar_type = function() {

    var localctx = new Scalar_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, StopParser.RULE_scalar_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__5) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20))) !== 0))) {
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
};

function Model_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_model_type;
    return this;
}

Model_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Model_typeContext.prototype.constructor = Model_typeContext;

Model_typeContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

Model_typeContext.prototype.reference = function() {
    return this.getTypedRuleContext(ReferenceContext,0);
};

Model_typeContext.prototype.DOT = function() {
    return this.getToken(StopParser.DOT, 0);
};

Model_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterModel_type(this);
	}
};

Model_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitModel_type(this);
	}
};




StopParser.Model_typeContext = Model_typeContext;

StopParser.prototype.model_type = function() {

    var localctx = new Model_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, StopParser.RULE_model_type);
    try {
        this.state = 156;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 151;
            this.match(StopParser.MODEL_TYPE);
            break;
        case StopParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 152;
            this.reference(0);
            this.state = 153;
            this.match(StopParser.DOT);
            this.state = 154;
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
};

function Enum_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_enum_type;
    return this;
}

Enum_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Enum_typeContext.prototype.constructor = Enum_typeContext;

Enum_typeContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

Enum_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterEnum_type(this);
	}
};

Enum_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitEnum_type(this);
	}
};




StopParser.Enum_typeContext = Enum_typeContext;

StopParser.prototype.enum_type = function() {

    var localctx = new Enum_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, StopParser.RULE_enum_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
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
};

function Enum_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_enum_value;
    return this;
}

Enum_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Enum_valueContext.prototype.constructor = Enum_valueContext;

Enum_valueContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

Enum_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterEnum_value(this);
	}
};

Enum_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitEnum_value(this);
	}
};




StopParser.Enum_valueContext = Enum_valueContext;

StopParser.prototype.enum_value = function() {

    var localctx = new Enum_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, StopParser.RULE_enum_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
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
};

function EnumerationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_enumeration;
    return this;
}

EnumerationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumerationContext.prototype.constructor = EnumerationContext;

EnumerationContext.prototype.enum_type = function() {
    return this.getTypedRuleContext(Enum_typeContext,0);
};

EnumerationContext.prototype.enum_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Enum_valueContext);
    } else {
        return this.getTypedRuleContext(Enum_valueContext,i);
    }
};

EnumerationContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterEnumeration(this);
	}
};

EnumerationContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitEnumeration(this);
	}
};




StopParser.EnumerationContext = EnumerationContext;

StopParser.prototype.enumeration = function() {

    var localctx = new EnumerationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, StopParser.RULE_enumeration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(StopParser.T__21);
        this.state = 163;
        this.enum_type();
        this.state = 164;
        this.match(StopParser.T__2);
        this.state = 166; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 165;
            this.enum_value();
            this.state = 168; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StopParser.MODEL_TYPE);
        this.state = 170;
        this.match(StopParser.T__4);
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
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FieldContext.prototype.ID = function() {
    return this.getToken(StopParser.ID, 0);
};

FieldContext.prototype.OPTIONAL = function() {
    return this.getToken(StopParser.OPTIONAL, 0);
};

FieldContext.prototype.dynamic_source = function() {
    return this.getTypedRuleContext(Dynamic_sourceContext,0);
};

FieldContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitField(this);
	}
};




StopParser.FieldContext = FieldContext;

StopParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, StopParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.state = 188;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.OPTIONAL) {
                this.state = 172;
                this.match(StopParser.OPTIONAL);
            }

            this.state = 175;
            this.type();
            this.state = 176;
            this.match(StopParser.ID);
            this.state = 178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.RETURN_OP) {
                this.state = 177;
                this.dynamic_source();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.OPTIONAL) {
                this.state = 180;
                this.match(StopParser.OPTIONAL);
            }

            this.state = 183;
            this.collection();
            this.state = 184;
            this.match(StopParser.ID);
            this.state = 186;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.RETURN_OP) {
                this.state = 185;
                this.dynamic_source();
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
};

function Dynamic_sourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_dynamic_source;
    return this;
}

Dynamic_sourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Dynamic_sourceContext.prototype.constructor = Dynamic_sourceContext;

Dynamic_sourceContext.prototype.RETURN_OP = function() {
    return this.getToken(StopParser.RETURN_OP, 0);
};

Dynamic_sourceContext.prototype.model_type = function() {
    return this.getTypedRuleContext(Model_typeContext,0);
};

Dynamic_sourceContext.prototype.dynamic_source_mapping = function() {
    return this.getTypedRuleContext(Dynamic_source_mappingContext,0);
};

Dynamic_sourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterDynamic_source(this);
	}
};

Dynamic_sourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitDynamic_source(this);
	}
};




StopParser.Dynamic_sourceContext = Dynamic_sourceContext;

StopParser.prototype.dynamic_source = function() {

    var localctx = new Dynamic_sourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, StopParser.RULE_dynamic_source);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(StopParser.RETURN_OP);
        this.state = 191;
        this.model_type();
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StopParser.T__22) {
            this.state = 192;
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
};

function Dynamic_source_mappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_dynamic_source_mapping;
    return this;
}

Dynamic_source_mappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Dynamic_source_mappingContext.prototype.constructor = Dynamic_source_mappingContext;

Dynamic_source_mappingContext.prototype.dynamic_source_mapping_parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Dynamic_source_mapping_parameterContext);
    } else {
        return this.getTypedRuleContext(Dynamic_source_mapping_parameterContext,i);
    }
};

Dynamic_source_mappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterDynamic_source_mapping(this);
	}
};

Dynamic_source_mappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitDynamic_source_mapping(this);
	}
};




StopParser.Dynamic_source_mappingContext = Dynamic_source_mappingContext;

StopParser.prototype.dynamic_source_mapping = function() {

    var localctx = new Dynamic_source_mappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, StopParser.RULE_dynamic_source_mapping);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(StopParser.T__22);
        this.state = 196;
        this.dynamic_source_mapping_parameter();
        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StopParser.T__23) {
            this.state = 197;
            this.match(StopParser.T__23);
            this.state = 198;
            this.dynamic_source_mapping_parameter();
            this.state = 203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 204;
        this.match(StopParser.T__24);
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
};

function Dynamic_source_mapping_parameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_dynamic_source_mapping_parameter;
    return this;
}

Dynamic_source_mapping_parameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Dynamic_source_mapping_parameterContext.prototype.constructor = Dynamic_source_mapping_parameterContext;

Dynamic_source_mapping_parameterContext.prototype.ID = function() {
    return this.getToken(StopParser.ID, 0);
};

Dynamic_source_mapping_parameterContext.prototype.dynamic_source_mapping_parameter_rename = function() {
    return this.getTypedRuleContext(Dynamic_source_mapping_parameter_renameContext,0);
};

Dynamic_source_mapping_parameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterDynamic_source_mapping_parameter(this);
	}
};

Dynamic_source_mapping_parameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitDynamic_source_mapping_parameter(this);
	}
};




StopParser.Dynamic_source_mapping_parameterContext = Dynamic_source_mapping_parameterContext;

StopParser.prototype.dynamic_source_mapping_parameter = function() {

    var localctx = new Dynamic_source_mapping_parameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, StopParser.RULE_dynamic_source_mapping_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(StopParser.ID);
        this.state = 207;
        this.match(StopParser.T__25);
        this.state = 208;
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
};

function ReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_reference;
    return this;
}

ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceContext.prototype.constructor = ReferenceContext;

ReferenceContext.prototype.ID = function() {
    return this.getToken(StopParser.ID, 0);
};

ReferenceContext.prototype.reference = function() {
    return this.getTypedRuleContext(ReferenceContext,0);
};

ReferenceContext.prototype.DOT = function() {
    return this.getToken(StopParser.DOT, 0);
};

ReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterReference(this);
	}
};

ReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitReference(this);
	}
};



StopParser.prototype.reference = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ReferenceContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 36;
    this.enterRecursionRule(localctx, 36, StopParser.RULE_reference, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(StopParser.ID);
        this._ctx.stop = this._input.LT(-1);
        this.state = 218;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ReferenceContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, StopParser.RULE_reference);
                this.state = 213;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 214;
                this.match(StopParser.DOT);
                this.state = 215;
                this.match(StopParser.ID); 
            }
            this.state = 220;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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
};

function Dynamic_source_mapping_parameter_renameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_dynamic_source_mapping_parameter_rename;
    return this;
}

Dynamic_source_mapping_parameter_renameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Dynamic_source_mapping_parameter_renameContext.prototype.constructor = Dynamic_source_mapping_parameter_renameContext;

Dynamic_source_mapping_parameter_renameContext.prototype.reference = function() {
    return this.getTypedRuleContext(ReferenceContext,0);
};

Dynamic_source_mapping_parameter_renameContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterDynamic_source_mapping_parameter_rename(this);
	}
};

Dynamic_source_mapping_parameter_renameContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitDynamic_source_mapping_parameter_rename(this);
	}
};




StopParser.Dynamic_source_mapping_parameter_renameContext = Dynamic_source_mapping_parameter_renameContext;

StopParser.prototype.dynamic_source_mapping_parameter_rename = function() {

    var localctx = new Dynamic_source_mapping_parameter_renameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, StopParser.RULE_dynamic_source_mapping_parameter_rename);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
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
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.scalar_type = function() {
    return this.getTypedRuleContext(Scalar_typeContext,0);
};

TypeContext.prototype.model_type = function() {
    return this.getTypedRuleContext(Model_typeContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitType(this);
	}
};




StopParser.TypeContext = TypeContext;

StopParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, StopParser.RULE_type);
    try {
        this.state = 225;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__5:
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
            this.enterOuterAlt(localctx, 1);
            this.state = 223;
            this.scalar_type();
            break;
        case StopParser.MODEL_TYPE:
        case StopParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 224;
            this.model_type();
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
};

function CollectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_collection;
    return this;
}

CollectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollectionContext.prototype.constructor = CollectionContext;

CollectionContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

CollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterCollection(this);
	}
};

CollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitCollection(this);
	}
};




StopParser.CollectionContext = CollectionContext;

StopParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, StopParser.RULE_collection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(StopParser.T__26);
        this.state = 228;
        this.type();
        this.state = 229;
        this.match(StopParser.T__27);
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
};

function Return_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_return_type;
    return this;
}

Return_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_typeContext.prototype.constructor = Return_typeContext;

Return_typeContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

Return_typeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Return_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterReturn_type(this);
	}
};

Return_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitReturn_type(this);
	}
};




StopParser.Return_typeContext = Return_typeContext;

StopParser.prototype.return_type = function() {

    var localctx = new Return_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, StopParser.RULE_return_type);
    try {
        this.state = 233;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 231;
            this.collection();
            break;
        case StopParser.T__5:
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
        case StopParser.MODEL_TYPE:
        case StopParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 232;
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
};

function Throw_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_throw_type;
    return this;
}

Throw_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Throw_typeContext.prototype.constructor = Throw_typeContext;

Throw_typeContext.prototype.throw_parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Throw_parameterContext);
    } else {
        return this.getTypedRuleContext(Throw_parameterContext,i);
    }
};

Throw_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterThrow_type(this);
	}
};

Throw_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitThrow_type(this);
	}
};




StopParser.Throw_typeContext = Throw_typeContext;

StopParser.prototype.throw_type = function() {

    var localctx = new Throw_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, StopParser.RULE_throw_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(StopParser.T__28);
        this.state = 236;
        this.throw_parameter();
        this.state = 241;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StopParser.T__23) {
            this.state = 237;
            this.match(StopParser.T__23);
            this.state = 238;
            this.throw_parameter();
            this.state = 243;
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
};

function Throw_parameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_throw_parameter;
    return this;
}

Throw_parameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Throw_parameterContext.prototype.constructor = Throw_parameterContext;

Throw_parameterContext.prototype.model_type = function() {
    return this.getTypedRuleContext(Model_typeContext,0);
};

Throw_parameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterThrow_parameter(this);
	}
};

Throw_parameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitThrow_parameter(this);
	}
};




StopParser.Throw_parameterContext = Throw_parameterContext;

StopParser.prototype.throw_parameter = function() {

    var localctx = new Throw_parameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, StopParser.RULE_throw_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
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
};

function TransitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_transition;
    return this;
}

TransitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TransitionContext.prototype.constructor = TransitionContext;

TransitionContext.prototype.TRANSITION_OP = function() {
    return this.getToken(StopParser.TRANSITION_OP, 0);
};

TransitionContext.prototype.model_type = function() {
    return this.getTypedRuleContext(Model_typeContext,0);
};

TransitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterTransition(this);
	}
};

TransitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitTransition(this);
	}
};




StopParser.TransitionContext = TransitionContext;

StopParser.prototype.transition = function() {

    var localctx = new TransitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, StopParser.RULE_transition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(StopParser.TRANSITION_OP);
        this.state = 247;
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
};

function EnqueueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_enqueue;
    return this;
}

EnqueueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnqueueContext.prototype.constructor = EnqueueContext;

EnqueueContext.prototype.ENQUEUE_OP = function() {
    return this.getToken(StopParser.ENQUEUE_OP, 0);
};

EnqueueContext.prototype.model_type = function() {
    return this.getTypedRuleContext(Model_typeContext,0);
};

EnqueueContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterEnqueue(this);
	}
};

EnqueueContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitEnqueue(this);
	}
};




StopParser.EnqueueContext = EnqueueContext;

StopParser.prototype.enqueue = function() {

    var localctx = new EnqueueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, StopParser.RULE_enqueue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(StopParser.ENQUEUE_OP);
        this.state = 250;
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
};


StopParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.packageName_sempred(localctx, predIndex);
	case 18:
			return this.reference_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

StopParser.prototype.packageName_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

StopParser.prototype.reference_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.StopParser = StopParser;
