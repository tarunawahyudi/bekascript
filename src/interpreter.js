#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class BekaScriptInterpreter {
    constructor() {
        this.variables = {};
        this.functions = {};
    }

    // Tokenizer sederhana
    tokenize(code) {
        const tokens = [];
        const keywords = [
            'punya', 'anu', 'nongol', 'kalo', 'yakali', 'kalo_kaga',
            'ulangin', 'dari', 'ampe', 'pokonya', 'guna', 'balik'
        ];

        let i = 0;
        while (i < code.length) {
            const char = code[i];

            if (/\s/.test(char)) {
                i++;
                continue;
            }

            if (char === '/' && code[i + 1] === '/') {
                while (i < code.length && code[i] !== '\n') {
                    i++;
                }
                continue;
            }

            if (char === '"' || char === "'") {
                const quote = char;
                let str = '';
                i++;
                while (i < code.length && code[i] !== quote) {
                    if (code[i] === '\\') {
                        i++;
                        if (i < code.length) {
                            str += code[i];
                        }
                    } else {
                        str += code[i];
                    }
                    i++;
                }
                i++;
                tokens.push({ type: 'STRING', value: str });
                continue;
            }

            if (/\d/.test(char)) {
                let num = '';
                while (i < code.length && /[\d.]/.test(code[i])) {
                    num += code[i];
                    i++;
                }
                tokens.push({ type: 'NUMBER', value: parseFloat(num) });
                continue;
            }

            if (/[+\-*/=<>!&|]/.test(char)) {
                let op = char;
                i++;
                if (i < code.length) {
                    const next = code[i];
                    if ((char === '=' && next === '=') ||
                        (char === '!' && next === '=') ||
                        (char === '<' && next === '=') ||
                        (char === '>' && next === '=') ||
                        (char === '&' && next === '&') ||
                        (char === '|' && next === '|') ||
                        (char === '+' && next === '+') ||
                        (char === '-' && next === '-')) {
                        op += next;
                        i++;
                    }
                }
                tokens.push({ type: 'OPERATOR', value: op });
                continue;
            }

            if (/[{}();,]/.test(char)) {
                tokens.push({ type: 'PUNCT', value: char });
                i++;
                continue;
            }

            if (/[a-zA-Z_]/.test(char)) {
                let ident = '';
                while (i < code.length && /[a-zA-Z0-9_]/.test(code[i])) {
                    ident += code[i];
                    i++;
                }

                if (keywords.includes(ident)) {
                    tokens.push({ type: 'KEYWORD', value: ident });
                } else {
                    tokens.push({ type: 'IDENTIFIER', value: ident });
                }
                continue;
            }

            i++;
        }

        return tokens;
    }

    // Parser sederhana
    parse(tokens) {
        let current = 0;

        const peek = (offset = 0) => tokens[current + offset];
        const consume = () => {
            const token = peek();
            current++;
            return token;
        };

        const parseExpression = () => {
            let left = parsePrimary();

            while (current < tokens.length && peek()?.type === 'OPERATOR' &&
                    ['+', '-', '*', '/', '==', '!=', '<', '>', '<=', '>=', '&&', '||'].includes(peek()?.value)) {
                const operator = consume();
                const right = parsePrimary();
                left = { type: 'BinaryExpression', operator: operator.value, left, right };
            }

            return left;
        };

        const parsePrimary = () => {
            const token = peek();

            if (!token) return null;

            if (token.type === 'NUMBER') {
                consume();
                return { type: 'Literal', value: token.value };
            }

            if (token.type === 'STRING') {
                consume();
                return { type: 'Literal', value: token.value };
            }

            if (token.type === 'IDENTIFIER') {
                const name = consume().value;
                return { type: 'Identifier', name };
            }

            if (token.value === '(') {
                consume();
                const expr = parseExpression();
                consume();
                return expr;
            }

            return null;
        };

        const parseStatement = () => {
            const token = peek();

            if (!token) return null;

            // Variable declaration: punya/anu
            if (token.value === 'punya' || token.value === 'anu') {
                const kind = consume().value;
                const name = consume().value;
                consume(); // consume '='
                const value = parseExpression();
                consume(); // consume ';'

                return {
                    type: 'VariableDeclaration',
                    kind: kind === 'punya' ? 'const' : 'let',
                    name,
                    value
                };
            }

            // Console output: nongol
            if (token.value === 'nongol') {
                consume();
                const expression = parseExpression();
                consume(); // consume ';'

                return {
                    type: 'PrintStatement',
                    expression
                };
            }

            // If statement: kalo
            if (token.value === 'kalo') {
                consume();
                consume(); // consume '('
                const condition = parseExpression();
                consume(); // consume ')'
                consume(); // consume '{'

                const thenBody = [];
                while (peek()?.value !== '}') {
                    thenBody.push(parseStatement());
                }
                consume(); // consume '}'

                let elseIfs = [];
                let elseBody = null;

                while (peek()?.value === 'yakali') {
                    consume();
                    consume();
                    const elseIfCondition = parseExpression();
                    consume();
                    consume();

                    const elseIfBody = [];
                    while (peek()?.value !== '}') {
                        elseIfBody.push(parseStatement());
                    }
                    consume();

                    elseIfs.push({ condition: elseIfCondition, body: elseIfBody });
                }

                if (peek()?.value === 'kalo_kaga') {
                    consume();
                    consume();

                    elseBody = [];
                    while (peek()?.value !== '}') {
                        elseBody.push(parseStatement());
                    }
                    consume();
                }

                return {
                    type: 'IfStatement',
                    condition,
                    thenBody,
                    elseIfs,
                    elseBody
                };
            }

            // For loop: ulangin
            if (token.value === 'ulangin') {
                consume();
                const variable = consume().value;
                consume(); // consume 'dari'
                const start = parseExpression();
                consume(); // consume 'ampe'
                const end = parseExpression();
                consume(); // consume '{'

                const body = [];
                while (peek()?.value !== '}') {
                    body.push(parseStatement());
                }
                consume(); // consume '}'

                return {
                    type: 'ForStatement',
                    variable,
                    start,
                    end,
                    body
                };
            }

            // While loop: pokonya
            if (token.value === 'pokonya') {
                consume();
                consume();
                const condition = parseExpression();
                consume();
                consume();

                const body = [];
                while (peek()?.value !== '}') {
                    body.push(parseStatement());
                }
                consume();

                return {
                    type: 'WhileStatement',
                    condition,
                    body
                };
            }

            // Function declaration: guna
            if (token.value === 'guna') {
                consume();
                const name = consume().value;
                consume();

                const params = [];
                while (peek()?.value !== ')') {
                    params.push(consume().value);
                    if (peek()?.value === ',') {
                        consume();
                    }
                }
                consume();
                consume();

                const body = [];
                while (peek()?.value !== '}') {
                    body.push(parseStatement());
                }
                consume();

                return {
                    type: 'FunctionDeclaration',
                    name,
                    params,
                    body
                };
            }

            // Assignment, increment, or expression statement
            if (token.type === 'IDENTIFIER') {
                const name = consume().value;

                if (peek()?.value === '++') {
                    consume(); // consume '++'
                    if (peek()?.value !== ';') {
                        throw new Error('Expected semicolon after increment operator');
                    }
                    consume(); // consume ';'

                    return {
                        type: 'UnaryExpression',
                        operator: '++',
                        argument: { type: 'Identifier', name }
                    };
                }

                if (peek()?.value === '=') {
                    consume();
                    const value = parseExpression();
                    consume();

                    return {
                        type: 'AssignmentStatement',
                        name,
                        value
                    };
                }

                current--;
                const expression = parseExpression();
                consume();

                return {
                    type: 'ExpressionStatement',
                    expression
                };
            }

            return null;
        };

        const statements = [];
        while (current < tokens.length) {
            const stmt = parseStatement();
            if (stmt) {
                statements.push(stmt);
            } else {
                throw new Error(`Unexpected token: ${peek()?.value}`);
            }
        }

        return statements;
    }

    // Evaluator
    evaluate(node, scope = this.variables) {
        if (!node) return null;

        switch (node.type) {
            case 'Literal':
                return node.value;

            case 'Identifier':
                return scope[node.name];

            case 'BinaryExpression':
                const left = this.evaluate(node.left, scope);
                const right = this.evaluate(node.right, scope);

                switch (node.operator) {
                    case '+':
                        if (typeof left === 'string' || typeof right === 'string') {
                            return String(left) + String(right);
                        }
                        return left + right;
                    case '-': return left - right;
                    case '*': return left * right;
                    case '/': return left / right;
                    case '==': return left == right;
                    case '!=': return left != right;
                    case '<': return left < right;
                    case '>': return left > right;
                    case '<=': return left <= right;
                    case '>=': return left >= right;
                    case '&&': return left && right;
                    case '||': return left || right;
                    default: return null;
                }

            case 'CallExpression':
                if (this.functions[node.name]) {
                    const func = this.functions[node.name];
                    const newScope = { ...scope };

                    for (let i = 0; i < func.params.length; i++) {
                        newScope[func.params[i]] = this.evaluate(node.arguments[i], scope);
                    }

                    let result = null;
                    for (const stmt of func.body) {
                        result = this.execute(stmt, newScope);
                    }

                    return result;
                }
                break;

            default:
                return null;
        }
    }

    // Executor
    execute(statement, scope = this.variables) {
        if (!statement) return;

        switch (statement.type) {
            case 'VariableDeclaration':
                scope[statement.name] = this.evaluate(statement.value, scope);
                break;

            case 'AssignmentStatement':
                scope[statement.name] = this.evaluate(statement.value, scope);
                break;

            case 'PrintStatement':
                const value = this.evaluate(statement.expression, scope);
                console.log(value);
                break;

            case 'IfStatement':
                const condition = this.evaluate(statement.condition, scope);

                if (condition) {
                    for (const stmt of statement.thenBody) {
                        this.execute(stmt, scope);
                    }
                } else {
                    let executed = false;
                    for (const elseIf of statement.elseIfs) {
                        if (this.evaluate(elseIf.condition, scope)) {
                            for (const stmt of elseIf.body) {
                                this.execute(stmt, scope);
                            }
                            executed = true;
                            break;
                        }
                    }

                    if (!executed && statement.elseBody) {
                        for (const stmt of statement.elseBody) {
                            this.execute(stmt, scope);
                        }
                    }
                }
                break;

            case 'ForStatement':
                const start = this.evaluate(statement.start, scope);
                const end = this.evaluate(statement.end, scope);

                // Perbaiki logika for loop untuk memungkinkan hitungan mundur
                if (start < end) {
                    for (let i = start; i < end; i++) {
                        const loopScope = { ...scope, [statement.variable]: i };
                        for (const stmt of statement.body) {
                            this.execute(stmt, loopScope);
                        }
                    }
                } else {
                    for (let i = start; i > end; i--) {
                        const loopScope = { ...scope, [statement.variable]: i };
                        for (const stmt of statement.body) {
                            this.execute(stmt, loopScope);
                        }
                    }
                }
                break;

            case 'WhileStatement':
                while (this.evaluate(statement.condition, scope)) {
                    for (const stmt of statement.body) {
                        this.execute(stmt, scope);
                    }
                }
                break;

            case 'FunctionDeclaration':
                this.functions[statement.name] = {
                    params: statement.params,
                    body: statement.body
                };
                break;

            case 'ExpressionStatement':
                return this.evaluate(statement.expression, scope);

            case 'UnaryExpression':
                if (statement.operator === '++') {
                    if (typeof scope[statement.argument.name] !== 'number') {
                        throw new Error(`Operand for '++' must be a number.`);
                    }
                    scope[statement.argument.name]++;
                } else {
                    throw new Error(`Unknown unary operator: ${statement.operator}`);
                }
                break;
        }
    }

    // Main run method
    run(code) {
        try {
            const tokens = this.tokenize(code);
            const ast = this.parse(tokens);

            for (const statement of ast) {
                this.execute(statement);
            }
        } catch (error) {
            console.error('BekaScript Error:', error.message);
        }
    }
}

// CLI usage
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Usage: node bekascript.js <file.bks>');
        process.exit(1);
    }

    const filename = args[0];

    if (!fs.existsSync(filename)) {
        console.error(`File not found: ${filename}`);
        process.exit(1);
    }

    const code = fs.readFileSync(filename, 'utf8');
    const interpreter = new BekaScriptInterpreter();
    interpreter.run(code);
}

module.exports = BekaScriptInterpreter;
