from werkzeug.security import generate_password_hash
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, request, jsonify, session, redirect, render_template
import random
import smtplib
from flask import Flask, request, jsonify
from pymongo import MongoClient
from datetime import date
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

today = date.today()
day = today.strftime("%d/%m/%Y")

# Replace 'your_mongodb_uri' with your MongoDB URI
client = MongoClient(
    'mongodb+srv://Prashee:ra2132241020011@cluster0.qyfkkxz.mongodb.net/test')
dbl = client['Staff']
db = client['faculty_appraisal']
staff_collection = dbl['user']
# collection = db['appraisal_data']

# login


# appraisal


@app.route('/achievement_score', methods=['POST'])
def achievement_score():
    data = request.json

    employee_id = data.get('employee_id')
    target = int(data.get('target'))
    cumulative = int(data.get('cumulative'))
    target_score = 10
    schema = 2
    score = 0

    if target < 75:
        score = 0
    else:
        diff = target - 75
        points = (diff // 5) * schema
        score = points

    data_to_store = {
        'employee_id': employee_id,
        'category': 'achievement_score',
        'score': score,
        'date': day
    }
    db.achievement_score.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200


@app.route('/online_course', methods=['POST'])
def online_course():
    data = request.json

    employee_id = data.get('employee_id')
    course = int(data.get('course'))
    cumulative = int(data.get('cumulative'))

    if course + cumulative > 2:
        course = 2
    total = course + cumulative
    score = total * 2.50

    data_to_store = {
        'employee_id': employee_id,
        'category': 'online_course',
        'score': score,
        'date': day
    }
    db.online_course.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200


@app.route('/fdp', methods=['POST'])
def fdp():
    data = request.json

    employee_id = data.get('employee_id')
    weeks = int(data.get('weeks'))
    program = int(data.get('program'))
    cumulative = int(data.get('cumulative'))
    points = 0

    if weeks == 1:
        points = program * 1.5
    elif weeks == 2:
        points = program * 2.5
    if points > 5:
        points = 5

    data_to_store = {
        'employee_id': employee_id,
        'category': 'fdp',
        'score': points,
        'date': day
    }
    db.fdp.insert_one(data_to_store)

    return jsonify({'day': day, 'score': points}), 200


@app.route('/counselling', methods=['POST'])
def counselling():
    data = request.json

    employee_id = data.get('employee_id')
    session = int(data.get('session'))
    cumulative = int(data.get('cumulative'))
    score = session * 1
    if score > 3:
        score = 3

    data_to_store = {
        'employee_id': employee_id,
        'category': 'counselling',
        'score': score,
        'date': day
    }
    db.counselling.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200


@app.route('/online_feedback', methods=['POST'])
def online_feedback():
    data = request.json

    employee_id = data.get('employee_id')
    feedback = float(data.get('feedback'))
    cumulative = int(data.get('cumulative'))
    score = 0

    if feedback < 8:
        score = 0
    elif feedback > 10:
        return jsonify({'day': day, 'error': 'feedback is lesser than or equal to 10'}), 400
    else:
        points = feedback - 8
        score = points * 1
    if score > 2:
        score = 2

    data_to_store = {
        'employee_id': employee_id,
        'category': 'online_feedback',
        'score': score,
        'date': day
    }
    db.online_feedback.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200


@app.route('/precption', methods=['POST'])
def precption():
    data = request.json

    employee_id = data.get('employee_id')
    position = data.get('position')
    cumulative = int(data.get('cumulative'))
    points = 0

    if position == "convener":
        points = 5
    elif position == "co-covener":
        points = 5
    elif position == "committeMember":
        points = 2
    if points > 5:
        points = 5

    data_to_store = {
        'employee_id': employee_id,
        'category': 'precption',
        'score': points,
        'date': day
    }
    db.precption.insert_one(data_to_store)

    return jsonify({'day': day, 'score': points}), 200


@app.route('/research_paper', methods=['POST'])
def research_paper():
    data = request.json

    employee_id = data.get('employee_id')
    no_ofPaper = int(data.get('no_ofPaper'))
    position = int(data.get('position'))
    cumulative = int(data.get('cumulative'))

    score = 0
    if position == 1:
        score = no_ofPaper * 15
    elif position == 2:
        score = no_ofPaper * 10
    elif position == 3:
        score = no_ofPaper * 5
    else:
        return jsonify({'day': day, 'error': 'Wrong position'}), 400
    if score > 30:
        score = 30

    data_to_store = {
        'employee_id': employee_id,
        'category': 'research_paper',
        'score': score,
        'date': day
    }
    db.research_paper.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200


@app.route('/paper_presentaion', methods=['POST'])
def paper_presentaion():
    data = request.json

    employee_id = data.get('employee_id')
    conference = data.get('conference')
    no_ofPaper = int(data.get('no_ofPaper'))
    cumulative = int(data.get('cumulative'))
    score = 0

    if conference == "National":
        score = no_ofPaper * 3
    elif conference == "International":
        score = no_ofPaper * 4
    if score > 8:
        score = 8

    data_to_store = {
        'employee_id': employee_id,
        'category': 'paper_presentaion',
        'score': score,
        'date': day
    }
    db.paper_presentaion.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200


@app.route('/research_project', methods=['POST'])
def research_project():
    data = request.json

    employee_id = data.get('employee_id')
    number_of_project = int(data.get('number_of_project'))
    cumulative = int(data.get('cumulative'))
    price = float(data.get('price'))
    FstScore = 0
    secScore = 0
    fstAuthor = data.get('fstAuthor')
    secdAuthor = data.get('secdAuthor')

    if price < 5:
        FstScore = number_of_project * 2.5
        secScore = number_of_project * 1.2
    elif (price > 5) and (price < 30):
        FstScore = number_of_project * 4
        secScore = number_of_project * 2.5
    elif (price >= 30) and (price < 60):
        FstScore = number_of_project * 10
        secScore = number_of_project * 5
    else:
        return jsonify({'day': day, 'error': 'Invalid cost of project'}), 400

    data_to_store = {
        'employee_id': employee_id,
        'category': 'research_project',
        'FstAuthor': f'{fstAuthor} First Author score',
        'FstScore': FstScore,
        'SecAuthor': f'{secdAuthor} Second Author score',
        'SecScore': secScore,
        'date': day
    }
    db.research_project.insert_one(data_to_store)

    return (
        jsonify({
            'day': day,
            'FstAuthor': f'{fstAuthor} First Author score',
            'FstScore': FstScore,
            'SecAuthor': f'{secdAuthor} Second Author score',
            'SecScore': secScore,
        }),
        200,
    )


@app.route('/research_proposal', methods=['POST'])
def research_proposal():
    data = request.json

    employee_id = data.get('employee_id')
    proposal = int(data.get('proposal'))
    score = proposal * 1.5
    if score > 3:
        score = 3

    data_to_store = {
        'employee_id': employee_id,
        'category': 'research_proposal',
        'score': score,
        'date': day
    }
    db.research_proposal.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200


@app.route('/consultancy', methods=['POST'])
def consultancy():
    data = request.json

    employee_id = data.get('employee_id')
    numberOFcouncil = int(data.get('numberOFcouncil'))
    price = float(data.get('price'))
    score = 0

    if price <= 1:
        score = numberOFcouncil * 1
    elif (price > 1) and (price <= 2):
        score = numberOFcouncil * 1.5
    elif price > 2:
        score = numberOFcouncil * 3

    data_to_store = {
        'employee_id': employee_id,
        'category': 'consultancy',
        'score': score,
        'date': day
    }
    db.consultancy.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200


@app.route('/inovative', methods=['POST'])
def inovative():
    data = request.json

    employee_id = data.get('employee_id')
    number_of_inovative = int(data.get('number_of_inovative'))
    score = number_of_inovative * 1.5
    if score > 2.5:
        score = 2.5

    data_to_store = {
        'employee_id': employee_id,
        'category': 'inovative',
        'score': score,
        'date': day
    }
    db.inovative.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200


@app.route('/content_development', methods=['POST'])
def content_development():
    data = request.json

    employee_id = data.get('employee_id')
    numberOfcontent_development = int(data.get('numberOfcontent_development'))
    score = numberOfcontent_development * 1.5
    if score > 2.5:
        score = 2.5

    data_to_store = {
        'employee_id': employee_id,
        'category': 'content_development',
        'score': score,
        'date': day
    }
    db.content_development.insert_one(data_to_store)

    return jsonify({'day': day, 'score': score}), 200

# Add other functions here


if __name__ == '__main__':
    app.run(debug=True)
