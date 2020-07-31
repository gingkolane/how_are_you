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
    t.text "condition_name", limit: 4294967295, collation: "utf8mb4_0900_ai_ci"
    t.string "parent_id", limit: 45
  end

  create_table "conditions_treatments", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "condition_id", null: false
    t.integer "treatment_id", null: false
    t.index ["condition_id"], name: "conditionKey_idx"
    t.index ["treatment_id"], name: "treatmentKey_idx"
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

  create_table "groups", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "condition_id"
    t.string "group_type", comment: "dis_group, interest_group, official_group"
    t.string "group_name"
    t.string "description"
    t.string "avatar_url"
    t.string "tags"
    t.integer "member_count"
    t.string "time_founded"
  end

  create_table "groups_users", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "user_id"
    t.integer "group_id"
    t.string "priviledge", comment: "0:regular, 1: admin, 2:creator"
    t.integer "hide", limit: 1, comment: "0: view post, 1: hide group post"
    t.date "time_user_joined"
  end

  create_table "records", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "user_id"
    t.integer "doctor_id"
    t.integer "condition_id"
    t.date "date_of_record"
    t.string "record_type", collation: "utf8mb4_0900_ai_ci", comment: "treatement visit, regular visit"
    t.string "diagnosis"
    t.index ["condition_id"], name: "conditionKey_idx"
    t.index ["user_id"], name: "userKey_idx"
  end

  create_table "records_treatments", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.integer "record_id"
    t.integer "treatment_id"
    t.index ["record_id"], name: "recordKey_idx"
    t.index ["treatment_id"], name: "treatmentKey_idx"
  end

  create_table "treatments", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.text "treatment_name", limit: 4294967295
    t.text "treatment_type", limit: 4294967295
    t.text "DESCRIPTION", limit: 4294967295
    t.boolean "is_part_of_trial"
    t.string "NCT_ID", limit: 10
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

  create_table "users", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
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
    t.string "myCondition"
  end

  add_foreign_key "records", "conditions", name: "conditionKey", on_update: :cascade, on_delete: :cascade
  add_foreign_key "records", "users", name: "userKey", on_update: :cascade, on_delete: :cascade
  add_foreign_key "records_treatments", "records", primary_key: "user_id", name: "recordKey", on_update: :cascade, on_delete: :cascade
  add_foreign_key "records_treatments", "treatments", name: "treatmentKey", on_update: :cascade, on_delete: :cascade
end
