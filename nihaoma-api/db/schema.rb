# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_14_023826) do

  create_table "conditions", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "parent_id"
    t.text "condition_name", limit: 4294967295
  end

  create_table "conditions_doctors", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "condition_id", null: false
    t.integer "doctor_id", null: false
  end

  create_table "conditions_treatments", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "condition_id", null: false
    t.integer "treatment_id", null: false
  end

  create_table "conditions_trials", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "condition_id"
    t.integer "trial_id"
    t.text "NCT_ID", limit: 4294967295
    t.index ["condition_id"], name: "conditionKey"
    t.index ["trial_id"], name: "trialKey"
  end

  create_table "doctors", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.text "doctor_name", limit: 4294967295
    t.text "ROLE", limit: 4294967295
    t.text "FACILITY_NAME", limit: 4294967295
    t.text "CITY", limit: 4294967295
    t.text "STATE", limit: 4294967295
    t.text "ZIP", limit: 4294967295
    t.text "COUNTRY", limit: 4294967295
  end

  create_table "doctors_trials", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "trial_id"
    t.integer "doctor_id"
    t.text "NCT_ID", limit: 4294967295
    t.index ["doctor_id"], name: "doctorKey"
    t.index ["trial_id"], name: "trialKey_doctor"
  end

  create_table "groups", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.string "group_type", comment: "dis_group, interest_group, official_group"
    t.bigint "condition_id"
    t.string "group_name"
    t.string "description"
    t.string "avatar_url"
    t.string "tags"
    t.integer "member_count"
    t.string "time_founded"
  end

  create_table "groups_users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "group_id"
    t.bigint "user_id"
    t.string "priviledge", comment: "0:regular, 1: admin, 2:creator"
    t.integer "hide", limit: 1, comment: "0: view post, 1: hide group post"
    t.date "time_user_joined"
    t.index ["group_id"], name: "groupKey"
    t.index ["user_id"], name: "userKey"
  end

  create_table "records", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "user_id"
    t.integer "condition_id"
    t.integer "doctor_id"
    t.integer "records_treatment_id"
    t.date "date_of_visit"
    t.string "visit_type", comment: "treatement visit, regular visit"
    t.string "diagnosis"
  end

  create_table "records_treatments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "treatment_id"
    t.integer "record_id"
    t.string "type", comment: "medicine, device, procedure"
  end

  create_table "treatments", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.text "treatment_name", limit: 4294967295
    t.text "treatment_type", limit: 4294967295
    t.text "DESCRIPTION", limit: 4294967295
  end

  create_table "trials", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.text "NCT_ID", limit: 4294967295
    t.text "BRIEF_TITLE", limit: 4294967295
    t.text "BRIEF_SUMMARY", limit: 4294967295
    t.text "OVERALL_STATUS", limit: 4294967295
    t.text "START_DATE", limit: 4294967295
    t.text "START_DATE_TYPE", limit: 4294967295
    t.text "COMPLETION_DATE", limit: 4294967295
    t.text "COMPLETION_DATE_TYPE", limit: 4294967295
    t.text "PHASE", limit: 4294967295
    t.text "STUDY_TYPE", limit: 4294967295
    t.text "ENROLLMENT_TYPE", limit: 4294967295
    t.text "ENROLLMENT", limit: 4294967295
    t.text "CRITERIA", limit: 4294967295
    t.text "GENDER", limit: 4294967295
    t.text "MINIMUM_AGE", limit: 4294967295
    t.text "MAXIMUM_AGE", limit: 4294967295
    t.text "URL", limit: 4294967295
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "myCondition"
    t.string "realname"
    t.string "email"
    t.string "mobile"
    t.string "status", comment: "1: online, 0: offline"
    t.integer "age"
    t.string "gender"
    t.string "city"
    t.string "user_pict"
    t.string "description"
    t.string "tag"
    t.datetime "time_registered"
  end

  add_foreign_key "conditions_trials", "conditions", name: "conditionKey", on_update: :cascade, on_delete: :cascade
  add_foreign_key "conditions_trials", "trials", name: "trialKey", on_update: :cascade, on_delete: :cascade
  add_foreign_key "groups_users", "groups", name: "groupKey", on_update: :cascade, on_delete: :cascade
  add_foreign_key "groups_users", "users", name: "userKey"
end
